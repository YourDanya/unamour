import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/items/item-form/item-common/item-common.content'
import {useContext} from 'react'
import {useRef} from 'react'
import {ItemCommonProps} from 'components/admin/items/item-form/item-common/item-common.types'
import {useMapInputs} from 'hooks/input/input-v2.hooks'
import {useInputChange} from 'hooks/input/input-v2.hooks'
import {useState} from 'react'
import {useValidateInput} from 'hooks/input/input-v2.hooks'
import {AdminItemsContext} from 'components/admin/items/admin-items.context'
import {useEffect} from 'react'
import {useItemFormContext} from 'components/admin/items/item-form/store/store'
import {ChangeCallback} from 'hooks/input/input-v2.types'
import {shallow} from 'zustand/shallow'
import {useCallback} from 'react'

const useItemCommon = (props: ItemCommonProps) => {
    const {itemIndex} = props
    const [transl, content] = useLocale(itemCommonContent)
    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const {setItemValue, setErrorCount, errorCountRef, itemValueRef} = useItemFormContext(state => state)

    const {values} = useItemFormContext(useCallback(( state) => {
        const {variants: _, ...values} = state.itemValue.common
        return {values}
    }, []))

    const {setSlugs, slugsRef, slugs} = useContext(AdminItemsContext)

    const initInputs = useMapInputs(content.inputs)

    const [errors, setErrors] = useState(initInputs.errors)
    const {onValidate, errRef} = useValidateInput({validations: initInputs.validations, errors})

    const changeCallback: ChangeCallback<typeof values> = ({changeValues, name}) => {
        itemValueRef.current.common = {...itemValueRef.current.common, ...changeValues}
        setItemValue(itemValueRef.current)
        if (name === 'slug') {
            slugsRef.current[itemValueRef.current._id] = changeValues.slug
            setSlugs({...slugsRef.current})
        }
        lastChangedName.current = name
    }

    const lastChangedName = useRef('')

    const {onChange} = useInputChange({values, changeCallback})

    useEffect(() => {
        if (lastChangedName.current === 'slug') {
            return
        }
        const beforeCount = errRef.current.count
        Object.entries(values).forEach(([name, value]) => onValidate(name, value))
        setErrors({...errRef.current.errors})
        const afterCount = errRef.current.count
        if (beforeCount !== afterCount) {
            errorCountRef.current += afterCount - beforeCount
            setErrorCount(errorCountRef.current)
        }
    }, [values])

    useEffect(() => {
        const beforeCount = errRef.current.count

        onValidate('slug', values.slug)

        if (!errRef.current.errors.slug) {
            const isSlugNotUnique = Object.values(slugsRef.current).reduce((count, slug) => {
                if (slug === values.slug) {
                    count++
                }
                return count
            }, 0) > 1

            if (isSlugNotUnique) {
                errRef.current.errors.slug = transl.uniqueSlug
                errRef.current.count += 1
            }
        }

        setErrors({...errRef.current.errors})

        const afterCount = errRef.current.count
        if (afterCount !== beforeCount) {
            errorCountRef.current += afterCount - beforeCount
            setErrorCount(errorCountRef.current)
        }

    }, [values.slug, slugs])

    return {transl, values, onChange, categoryTransl, categoryValues, errors, onValidate}
}

export default useItemCommon
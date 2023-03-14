import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/item-form/item-common/item-common.content'
import {useContext} from 'react'
import {useRef} from 'react'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'
import {useMapInputs} from 'hooks/input/input-v2.hooks'
import {useInputChange} from 'hooks/input/input-v2.hooks'
import {useState} from 'react'
import {useValidateInput} from 'hooks/input/input-v2.hooks'
import {AdminItemsContext} from 'pages/admin/items/admin-items.context'
import {useEffect} from 'react'
import {useItemFormContext} from 'components/admin/item-form/store/store'
import {ChangeCallback} from 'hooks/input/input-v2.types'

const useItemCommon = (props: ItemCommonProps) => {
    const [transl, content] = useLocale(itemCommonContent)
    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const {itemValueRef, itemValue, setItemValue, setErrorCount, errorCountRef} = useItemFormContext(state => state)
    const {common: {variants: _, ...values}} = itemValue
    const {slugs, setSlugs, slugsRef, testRef} = useContext(AdminItemsContext)

    const initInputs = useMapInputs(content.inputs)

    const [errors, setErrors] = useState(initInputs.errors)
    const {onValidate, errRef} = useValidateInput({validations: initInputs.validations, errors})
    const foundSlugRef = useRef(false)

    const changeCallback: ChangeCallback<typeof values> = ({changeValues, name}) => {
        itemValueRef.current.common = {...itemValueRef.current.common, ...changeValues}
        setItemValue(itemValueRef.current)

        const beforeCount = errRef.current.count
        onValidate(name, values[name])

        if (name === 'slug') {
            const foundSlug = !!Object.values(slugsRef.current).find(slug => slug === changeValues.slug)
            if (foundSlug && !errRef.current.errors.slug) {
                errRef.current.errors.slug = transl.uniqueSlug
                errRef.current.count += 1
                foundSlugRef.current = true
                setErrors({...errRef.current.errors})
            }
            slugsRef.current[itemValue._id] = changeValues.slug
            setSlugs({...slugsRef.current})
        }

        const afterCount = errRef.current.count
        if (beforeCount !== afterCount) {
            errorCountRef.current += afterCount - beforeCount
            setErrorCount(errorCountRef.current)
        }
        setErrors(errRef.current.errors)
    }

    const {onChange} = useInputChange({values, changeCallback})

    useEffect(() => {
        if (foundSlugRef.current) {
            const findCount = Object.values(slugs).reduce((count, slug) => {
                if (slug === values.slug) {
                    count++
                }
                return count
            }, 0)
            if (findCount === 1) {
                foundSlugRef.current = false
                errRef.current.count -= 1
                errRef.current.errors.slug = ''
                errorCountRef.current -=1
                setErrorCount(errorCountRef.current)
                setErrors({...errRef.current.errors})
            }
        }
    }, [slugs])

    return {transl, values, onChange, categoryTransl, categoryValues, errors, onValidate}
}

export default useItemCommon
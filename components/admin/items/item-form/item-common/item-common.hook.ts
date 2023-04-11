import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/items/item-form/item-common/item-common.content'
import {ItemCommonProps} from 'components/admin/items/item-form/item-common/item-common.types'
import {useMapInputs} from 'hooks/input/input-v2.hooks'
import {useInputChange} from 'hooks/input/input-v2.hooks'
import {useState} from 'react'
import {useValidateInput} from 'hooks/input/input-v2.hooks'
import {useEffect} from 'react'
import {useItemFormStore} from 'components/admin/items/item-form/store/item-form.store'
import {ChangeCallback} from 'hooks/input/input-v2.types'
import {useCallback} from 'react'
import {getEntries} from 'utils/main/main.utils'
import {useAdminItemsStore} from 'components/admin/items/store/admin-items.store'
import {peek} from 'utils/main/main.utils'
import {shallow} from 'zustand/shallow'
import {usePaginationStore} from 'components/common/pagination/store/pagination.stote'

const useItemCommon = (props: ItemCommonProps) => {
    const [transl, content] = useLocale(itemCommonContent)
    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const itemIndex = usePaginationStore(state => state.itemIndex)

    const {
        items
    } = useAdminItemsStore(useCallback((state) => {
        return peek(state, ['items'])
    }, []), shallow)

    const {
        setItemValue, setErrorCount, errorCountRef, itemValueRef, itemValue
    } = useItemFormStore(useCallback((state) => {
        return peek(state, ['setItemValue', 'setErrorCount', 'errorCountRef', 'itemValueRef', 'itemValue'])
    }, []), shallow)

    const {values} = useItemFormStore(useCallback((state) => {
        const {variants: _, ...values} = state.itemValue.common
        return {values}
    }, []), shallow)

    const initInputs = useMapInputs(content.inputs)

    const [errors, setErrors] = useState(initInputs.errors)
    const {onValidate, errRef} = useValidateInput({validations: initInputs.validations, errors})

    const changeCallback: ChangeCallback<typeof values> = ({changeValues, name}) => {
        itemValueRef.current.common = {...itemValueRef.current.common, ...changeValues}
        setItemValue(itemValueRef.current)
    }

    const {onChange} = useInputChange({values, changeCallback})

    useEffect(() => {
        const beforeCount = errRef.current.count

        getEntries(values).forEach(([name, value]) => name !== 'slug' && onValidate(name, value))
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
            const isSlugNotUnique = Object.values(items).some(({common: {slug}}, index) => {
                return slug === values.slug && itemIndex !== index
            })

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

        itemIndex === 6 && console.log('calling useEffect values.slug')
    }, [values.slug])

    return {transl, values, onChange, categoryTransl, categoryValues, errors}
}

export default useItemCommon

// const {setSlugs, slugsRef, slugs} = useAdminItemsStore((state) => {
//     const {setSlugs, slugsRef, slugs} = state
//     return {setSlugs, slugsRef, slugs}
// })

// if (name === 'slug') {
//     slugsRef.current[itemValueRef.current._id] = changeValues.slug
//     setSlugs({...slugsRef.current})
// }
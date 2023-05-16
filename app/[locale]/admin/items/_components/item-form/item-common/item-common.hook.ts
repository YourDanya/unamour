import {useMapInputs} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import itemCommonContent from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.content'
import {ChangeCallback} from 'app/[locale]/_common/hooks/input/input-v2.types'
import {useAdminItemsStore} from 'app/[locale]/admin/items/_components/store/admin-items.store'
import {useInputChange} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {peek} from 'app/[locale]/_common/utils/main/main.utils'
import {useValidateInput} from 'app/[locale]/_common/hooks/input/input-v2.hooks'
import {ItemCommonProps} from 'app/[locale]/admin/items/_components/item-form/item-common/item-common.types'
import {categoriesContent} from 'app/[locale]/_content/content'
import {useCallback} from 'react'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useEffect} from 'react'
import {usePaginationStore} from 'app/[locale]/_common/components/pagination/store/pagination.stote'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {shallow} from 'zustand/shallow'

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

    }, [values.slug])

    return {transl, values, onChange, categoryTransl, categoryValues, errors}
}

export default useItemCommon

import {useMemo} from 'react'
import {Entry} from 'types/types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {useEffect} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {ItemTranslationProps} from 'components/admin/item-form/item-translation/item-translation.types'
import itemTranslationContent from 'components/admin/item-form/item-translation/item-translation.content'
import {setAdminField} from 'redux/admin/admin.slice'
import {useDispatch} from 'react-redux'

const useItemTranslation = (props: ItemTranslationProps) => {
    const {values, locale, itemValueRef, itemErrRef} = props
    const [transl, content] = useLocale(itemTranslationContent)

    const initValues = useMemo(() => {
        return Object.entries(values).reduce((initValues, entry) => {
            const [key, value] = entry as Entry<typeof values>
            const {validations} = content.inputs[key]
            initValues[key] = {value, validations}
            return initValues
        }, {} as {[key in keyof typeof values]:
            {value: typeof values[key], validations: typeof content.inputs[key]['validations']}})
    }, [])

    const {inputs, onChange, onValidate, errRef} = useInput(initValues)

    const dispatch = useDispatch()
    useEffect(() => {
        const before = errRef.current.count
        Object.keys(inputs.errors).forEach((key) => onValidate(key))
        const after = errRef.current.count
        itemErrRef.current += after - before
        if (itemErrRef.current === 0) {
            const copy: FetchedItem = JSON.parse(JSON.stringify(itemValueRef.current))
            copy.translations[locale] = {...inputs.values}
            itemValueRef.current = copy
        }
        if (after !== before) {
            dispatch(setAdminField({
                field: 'updateItem',
                slug: itemValueRef.current.common.slug,
                value: {error: {client: itemErrRef.current, server: null}}
            }))
        }
    }, [inputs.values])

    return {inputs, onChange, onValidate, transl}
}

export default useItemTranslation
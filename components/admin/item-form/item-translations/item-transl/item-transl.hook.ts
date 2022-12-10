import {useMemo} from 'react'
import {Entry} from 'types/types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import itemTransl from 'components/admin/item-form/item-translations/item-transl/item-transl.content'
import {ItemTranslProps} from 'components/admin/item-form/item-translations/item-transl/item-transl.types'
import {useEffect} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

const useItemTransl = (props: ItemTranslProps) => {
    let {values, locale, itemValueRef, localeTransl} = props
    const [transl, content] = useLocale(itemTransl)

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

    useEffect(() => {
        const before = errRef.current.count
        Object.keys(inputs.errors).forEach((key) => onValidate(key))
        const after = errRef.current.count
        errRef.current.count += after - before
        if (errRef.current.count === 0) {
            const copy: FetchedItem = JSON.parse(JSON.stringify(itemValueRef.current))
            copy.translations[locale] = {...inputs.values}
            itemValueRef.current = copy
        }
    }, [inputs.values])

    return {inputs, onChange, onValidate, transl: {...transl, locale: localeTransl}}
}

export default useItemTransl
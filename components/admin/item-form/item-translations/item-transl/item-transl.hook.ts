import {ItemCommonTranslation} from 'redux/shop-items/shop-items.types'
import {useMemo} from 'react'
import {Entry} from 'types/types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import itemTransl from 'components/admin/item-form/item-translations/item-transl/item-transl.content'
import {ItemTranslProps} from 'components/admin/item-form/item-translations/item-transl/item-transl.types'
import {useEffect} from 'react'

const useItemTransl = (props: ItemTranslProps) => {
    const {values, locale, refObj} = props
    const [transl] = useLocale(itemTransl)

    const initValues = useMemo(() => {
        return Object.entries(values).reduce((accum, entry) => {
            const [key, value] = entry as Entry<ItemCommonTranslation>
            accum[key] = {value}
            return accum
        },  <{[key in keyof typeof values]: {value: typeof values [key]}}> {})
    }, [])
    const {inputs, onChange, onValidate} = useInput(initValues)

    useEffect(() => {
        refObj[locale] = inputs.values
    }, [inputs.values])

    return {inputs, onChange, onValidate, transl: {...transl, locale}}
}

export default useItemTransl
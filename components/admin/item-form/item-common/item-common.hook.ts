import {useInput} from 'hooks/input/input.hooks'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'
import {useMemo} from 'react'
import {Entry} from 'types/types'
import {useLocale} from 'hooks/other/other.hooks'
import itemCommonContent from 'components/admin/item-form/item-common/item-common.content'
import {categoriesContent} from 'components/common/content/content'
import {Locale} from 'types/types'

const useItemCommon = (props: ItemCommonProps) => {
    const {translations, ...other} = props
    const [transl] = useLocale(itemCommonContent)
    const [categoryTransl, categoryValues] = useLocale(categoriesContent)
    
    const commonValues = useMemo(() => {
        const commonValues = Object.entries(other).reduce((accum, entry) => {
            const [key, value] = entry as Entry<typeof other>
            (accum[key] as {value: typeof value}) = {value}
            return accum
        }, <{[key in keyof typeof other] : {value: typeof other[key]}}> {})
        const translValues = Object.entries(translations).reduce((accum, entry) => {
            const [locale, value] = entry as Entry<typeof translations>
            Object.entries(value).forEach(([key, value]) => {

            })
            return accum
        },  {})
        return {...commonValues, ...translValues}
    }, [])
    
    const {inputs, onChange: onInputChange, onValidate} = useInput(commonValues)

    return {inputs, onInputChange, onValidate, transl, categoryTransl, categoryValues}
}

export default useItemCommon
import {Entry} from 'types/types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/item-form/item-common/item-common.content'
import {useEffect} from 'react'
import {ItemCommonProps} from 'components/admin/item-form/item-common/item-common.types'

const useItemCommon = (props: ItemCommonProps) => {
    let {refObj, ...otherProps} = props

    const [transl] = useLocale(itemCommonContent)

    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const initValues = Object.entries(otherProps).reduce((accum, entry) => {
        const [key, value] = entry as Entry<typeof otherProps>
        (accum[key] as {value: typeof value}) = {value}
        return accum
    }, <{[key in keyof typeof otherProps] : {value: typeof otherProps[key]}}> {})

    const {inputs, onChange, onValidate} = useInput(initValues)

    useEffect(() => {
        refObj.current = {...refObj.current, common: {...inputs.values}}
    }, [inputs.values])

    return {transl, inputs, onChange, onValidate, categoryTransl, categoryValues}
}

export default useItemCommon
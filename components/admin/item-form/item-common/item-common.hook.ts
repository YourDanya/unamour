import {Entry} from 'types/types'
import {ItemCommon} from 'redux/shop-items/shop-items.types'
import {useInput} from 'hooks/input/input.hooks'
import {useLocale} from 'hooks/other/other.hooks'
import {categoriesContent} from 'components/common/content/content'
import itemCommonContent from 'components/admin/item-form/item-common/item-common.content'

const useItemCommon = (props: ItemCommon) => {
    const [transl] = useLocale(itemCommonContent)

    const [categoryTransl, categoryValues] = useLocale(categoriesContent)

    const initValues = Object.entries(props).reduce((accum, entry) => {
        const [key, value] = entry as Entry<typeof props>
        (accum[key] as {value: typeof value}) = {value}
        return accum
    }, <{[key in keyof typeof props] : {value: typeof props[key]}}> {})

    const {inputs, onChange, onValidate} = useInput(initValues)

    return {transl, inputs, onChange, onValidate, categoryTransl, categoryValues}
}

export default useItemCommon
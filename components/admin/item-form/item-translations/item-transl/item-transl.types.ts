import {ItemCommonTranslation} from 'redux/shop-items/shop-items.types'
import {Validations} from 'hooks/input/input.types'
import {RefObj} from 'components/admin/item-form/item-form.types'

export type ItemTranslProps = {
    values: ItemCommonTranslation,
    locale: string,
    localeTransl: string,
    content: Record<keyof ItemCommonTranslation, {validations: Validations}>,
} & RefObj
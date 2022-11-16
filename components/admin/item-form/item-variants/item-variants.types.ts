import {RefObj} from 'components/admin/item-form/item-form.types'
import {ItemVariant} from 'redux/shop-items/shop-items.types'

export type ItemVariantsProps = {
    variants: ItemVariant[],
} & RefObj
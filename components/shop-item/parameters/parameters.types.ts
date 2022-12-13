import {ItemVariant} from 'redux/shop-items/shop-items.types'
import {MouseAction} from 'types/types'

export type ParametersProps = {
    name: string,
    oldPrice: string,
    price: string,
    sizes: string[],
    activeSize: string | null,
    showModal: MouseAction,
    handleSizeClick: MouseAction,
    color: string,
    variants: ItemVariant[]
}
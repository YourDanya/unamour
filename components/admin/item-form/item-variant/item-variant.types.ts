import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {MouseAction} from 'types/types'

export type ItemVariantProps = {
    color: string,
    sizes: string[],
    images: string[],
    price: string,
    refObj: MutableRefObject<FetchedItem>,
    variantIndex: number,
    onDeleteVariant: MouseAction
}



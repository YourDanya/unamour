import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {MouseAction} from 'types/types'
import {ImageFiles} from 'components/admin/item-form/item-form.types'

export type ItemVariantProps = {
    color: string,
    sizes: string[],
    images: string[]
    imageValues: MutableRefObject<ImageFiles>
    price: string,
    variantIndex: number,
    onDeleteVariant: MouseAction,
    itemValue: MutableRefObject<FetchedItem>,
    errorCount: MutableRefObject<number>,
    _id: string
}



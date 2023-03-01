import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {MouseAction} from 'types/types'
import {ImageFiles} from 'components/admin/item-form/item-form.types'

export type ItemVariantProps = {
    color: string,
    sizes: string[],
    images: string[]
    imagesRef: MutableRefObject<ImageFiles>
    price: string,
    variantIndex: number,
    onDeleteVariant: MouseAction,
    itemValueRef: MutableRefObject<FetchedItem>,
    itemErrRef: MutableRefObject<number>,
    _id: string
}



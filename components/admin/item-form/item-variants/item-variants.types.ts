import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {ImageFiles} from 'components/admin/item-form/item-form.types'

export type ItemVariantsProps = {
    variants: {
        color: string,
        sizes: string[],
        images: string[]
        price: string
    }[],
    itemValueRef: MutableRefObject<FetchedItem>,
    itemErrRef: MutableRefObject<number>,
    _id: string,
    imagesRef: MutableRefObject<ImageFiles>
}
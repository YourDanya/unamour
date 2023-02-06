import {ItemTranslations} from 'redux/shop-items/shop-items.types'
import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'

export type ItemTranslationsProps = ItemTranslations & {
    itemValueRef: MutableRefObject<FetchedItem>,
    itemErrRef: MutableRefObject<number>,
    _id: string
}

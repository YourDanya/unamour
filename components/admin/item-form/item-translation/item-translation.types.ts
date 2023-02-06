import {ItemCommonTranslation} from 'redux/shop-items/shop-items.types'
import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {Locale} from 'types/types'

export type ItemTranslationProps = {
    values: ItemCommonTranslation,
    locale: Locale,
    itemValueRef: MutableRefObject<FetchedItem>,
    itemErrRef: MutableRefObject<number>,
    _id: string
}
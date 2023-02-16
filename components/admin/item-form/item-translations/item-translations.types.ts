import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {Locale} from 'types/types'

export type ItemTranslationsProps ={
    translations: Record<Locale, {
        name: string,
        category: string,
        description: string,
        composition: string,
        parameters: string,
        delivery: string
    }>,
    itemValueRef: MutableRefObject<FetchedItem>,
    itemErrRef: MutableRefObject<number>,
    _id: string
}

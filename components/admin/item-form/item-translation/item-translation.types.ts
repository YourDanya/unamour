import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {Locale} from 'types/types'

export type ItemTranslationProps = {
    values: {
        name: string,
        category: string,
        description: string,
        composition: string,
        parameters: string,
        delivery: string
    },
    locale: Locale,
    itemValueRef: MutableRefObject<FetchedItem>,
    itemErrRef: MutableRefObject<number>,
    _id: string
}
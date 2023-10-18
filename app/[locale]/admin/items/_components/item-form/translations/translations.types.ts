import {MutableRefObject} from 'react'
import {FetchedItem} from 'app/_common/types/fetched-item'
import {Locale} from 'app/_common/types/types'

export type TranslationsProps ={
    translations: Record<Locale, {
        name: string,
        category: string,
        description: string,
        composition: string,
        parameters: string,
        delivery: string
    }>,
    itemValue: MutableRefObject<FetchedItem>,
    errorCount: MutableRefObject<number>,
    _id: string
}

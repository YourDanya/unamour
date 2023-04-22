import {MutableRefObject} from 'react'
import {FetchedItem} from 'app/[locale]/_common/types/types'
import {Locale} from 'app/[locale]/_common/types/types'

export type ItemTranslationsProps ={
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

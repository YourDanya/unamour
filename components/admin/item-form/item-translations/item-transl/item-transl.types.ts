import {ItemCommonTranslation} from 'redux/shop-items/shop-items.types'
import {Validations} from 'hooks/input/input.types'
import {MutableRefObject} from 'react'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {Locale} from 'types/types'

export type ItemTranslProps = {
    values: ItemCommonTranslation,
    locale: Locale,
    localeTransl: string,
    content: Record<keyof ItemCommonTranslation, {validations: Validations}>,
    refObj: MutableRefObject<FetchedItem>
}
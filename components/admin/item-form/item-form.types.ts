import {ItemTranslations} from 'redux/shop-items/shop-items.types'
import {ItemCommonTranslation} from 'redux/shop-items/shop-items.types'
import {ItemCommon} from 'redux/shop-items/shop-items.types'

export type RefObj = {refObj: Record<string, any>}

export type ItemTranslationProps = ItemTranslations & RefObj

export type ItemCommonTranslLocale = ItemCommonTranslation & RefObj

export type ItemCommonProps = ItemCommon & RefObj
import {ItemTranslations} from 'redux/shop-items/shop-items.types'
import {ItemCommonTranslation} from 'redux/shop-items/shop-items.types'
import {RefObj} from 'components/admin/item-form/item-form.types'

export type ItemTranslationProps = ItemTranslations & RefObj

export type ItemCommonTranslLocale = ItemCommonTranslation & RefObj

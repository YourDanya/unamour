import {ItemCommonTranslation} from 'redux/shop-items/shop-items.types'
import {Validations} from 'hooks/input/input.types'

export type ItemTranslProps = {
    values: ItemCommonTranslation,
    locale: string,
    content: Record<keyof ItemCommonTranslation, {validations: Validations}>,
    refObj: Record<string, any>
}
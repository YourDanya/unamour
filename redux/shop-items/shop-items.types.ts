import {Locale} from 'types/types'
import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'

export type Color = {
    code: string,
    slug: string,
}

export type ItemCommon = {
    slug: string,
    slugCategory: string,
    best: boolean,
    special: boolean,
    coming: boolean,
    oldPrice: string,
}

export type ItemVariants = {variants: ItemVariant[]}

export type ItemVariant = {
    color: Color,
    sizes: string[],
    images: string[],
    price: number,
}

export type ItemCommonTranslation = {
    name: string,
    category: string,
    currency: string,
    description: string,
    composition: string,
    parameters: string,
    delivery: string
}

export type ItemVariantsTranslation = {
    translations: Record<Locale, {variants: ItemVariantTranslation[]}>
}

export type ItemVariantTranslation = {
    color: {
        name: string
    }
}

export type ItemTranslations = {
    translations: Record<Locale, ItemCommonTranslation>
}

export type FetchedItem = {
    common: {
        slug: string,
        slugCategory: string,
        best: boolean,
        special: boolean,
        coming: boolean,
        oldPrice: string,
        variants: [
            {
                color: {
                    code: string,
                    slug: string
                },
                sizes: [string],
                images: [string],
                price: number
            }
        ]
    },
    translations: {
        ua: {
            name: string,
            category: string,
            currency: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            variants: [
                {
                    color: {
                        name: string
                    }
                }
            ],
        },
        eng: {
            name: string,
            category: string,
            currency: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            variants: [
                {
                    color: {
                        name: string
                    },
                }
            ]
        },
        ru: {
            name: string,
            category: string,
            currency: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            variants: [
                {
                    color: {
                        name: string
                    }
                }
            ]
        }
    }
}

export type ClientItem = ItemCommon & ItemCommonTranslation & ItemVariant  & ItemVariantTranslation & ItemTranslations
& ItemVariants & ItemVariantsTranslation

export type ShopItemsField = 'getItems'

export type ShopItemsErrors = ContentErrors<ShopItemsField>

export type ShopItemsSuccess = ContentSuccess<ShopItemsField>


export type ShopItemsState = {
    fetchedItems: FetchedItem[],
    clientItems: ClientItem[],
    fields: Record<ShopItemsField, StateField>
}
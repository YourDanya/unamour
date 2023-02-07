import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'

export type Color = {
    code: string,
    slug: string,
}

export type FetchedItem = {
    _id: string,
    updateTime: string,
    deleted: boolean,
    common: {
        slug: string,
        slugCategory: string,
        best: boolean,
        special: boolean,
        coming: boolean,
        oldPrice: string,
        variants: {
            color: string,
            sizes: string[],
            images: string[],
            price: string
        }[]
    },
    translations: {
        ua: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string
        },
        eng: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string
        },
        ru: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string,
        }
    }
}

export type CategoryItem = {
    common: {
        slug: string,
        images: string[],
        sizes: string[]
        price: string,
        oldPrice: string
        color: string,
    }
    translations: {
        ua: {
            name: string
        },
        eng: {
            name: string
        },
        ru: {
            name: string
        }
    }
}

export type ClientItem = {
    common: {
        slug: string,
        slugCategory: string,
        best: boolean,
        special: boolean,
        coming: boolean,
        oldPrice: string,
        color: string,
        sizes: string[],
        images: string[],
        price: string,
        variants: {
            color: string,
            sizes: string[],
            images: string[],
            price: string
        }[]
    }
    translations: {
        ua: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string
        },
        eng: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string
        },
        ru: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string,
        }
    }
}

export type ShopItemsField = 'getItems'
export type ShopItemsErrors = ContentErrors<ShopItemsField>
export type ShopItemsSuccess = ContentSuccess<ShopItemsField>

export type ShopItemsState = {
    fetchedItems: FetchedItem[],
    categoryItems: CategoryItem[],
    fields: Record<ShopItemsField, StateField>
}
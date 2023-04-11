import {StateField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'
import {AppThunk} from 'redux/store'
import {Locale} from 'types/types'

export type Color = {
    code: string,
    slug: string,
}

export type FetchedItem = {
    _id: string,
    updateTime: string,
    deleted: boolean,
    common: {
        volume: number,
        weight: number
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
            price: string,
            _id: string
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
    _id: string,
    common: {
        slug: string,
        slugCategory: string,
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

export type ShopItemsField = 'searchItems'
export type ShopItemsErrors = ContentErrors<ShopItemsField>
export type ShopItemsSuccess = ContentSuccess<ShopItemsField>

export type ShopItemsState = {
    searchItems: CategoryItem[],
    viewedItems: CategoryItem[],
    fields: Record<ShopItemsField, StateField>
}

export type SearchItems = (SearchItemsData: {query: string, locale: Locale}) => AppThunk
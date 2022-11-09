import {Locale} from 'types/types'

export type Color = {
    code: string,
    param: string,
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
    variants: ItemVariantTranslation[]
}

export type ItemVariantTranslation = {
    color: {
        name: string
    }
}

export type ItemTranslations = {
    translations: Record<Locale, ItemCommonTranslation>
}

export type FetchedItem = { common: ItemCommon } & ItemTranslations

export type ClientItem = ItemCommon & ItemCommonTranslation & ItemVariant  & ItemVariantTranslation & ItemTranslations
& ItemVariants & ItemVariantsTranslation

export type Merged<T, K> = Omit<T & K, keyof (T | K)> & Pick<T & K, keyof (T | K)>

export type ItemCategory = {slug: string} & Record<Locale, string>

export type ShopItemsState = {
    fetchedItems: FetchedItem[],
    clientItems: ClientItem[],
    error: object | null,
    categories: ItemCategory[]
}
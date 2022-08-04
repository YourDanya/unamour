export type Common = {
    slug: string,
    slugCategory: string,
    best: boolean,
    special: boolean,
    coming: boolean,
    oldPrice: number,
    variants: CommonVariant[]
}

export type CommonVariant = {
    color: {
        code: string,
        slug: string,
    },
    sizes: string[],
    images: string[],
    price: number,
}

export type Translation = {
    name: string,
    category: string,
    currency: string,
    description: string,
    composition: string,
    parameters: string,
    delivery: string,
    variants: TranslationVariant [],
}

export type TranslationVariant = {
    color: {
        name: string
    }
}

export type Translations = {
    translation: {
        ua: Translation,
        ru: Translation,
        eng: Translation
    }
}

export type FetchedItem = { common: Common } & Translations

export type ClientItem = Omit<Common, 'variants'> & CommonVariant & TranslationVariant & Omit<Translation, 'variants'> & Translations

export type Merged<T, K> = Omit<T & K, keyof (T | K)> & Pick<T & K, keyof (T | K)>

export type ItemCategory = {
    slug: string,
    ua: string,
    eng: string,
    ru: string
}

export type ShopItemsState = {
    fetchedItems: FetchedItem[],
    clientItems: ClientItem[],
    error: object | null,
    categories: ItemCategory[]
}
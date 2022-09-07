export type Common = {
    slug: string,
    slugCategory: string,
    best: boolean,
    special: boolean,
    coming: boolean,
    oldPrice: number,
    variants: CommonVariant[]
}

export type Color = {
    code: string,
    slug: string,
}

export type CommonVariant = {
    color: Color,
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
    translations: {
        ua: Translation,
        ru: Translation,
        eng: Translation
    }
}

export type FetchedItem = { common: Common } & Translations

export type ClientItem = Merged<Common, Translation> & CommonVariant  & TranslationVariant & Translations

export type MergedVariant = Pick<Common & Translation, 'variants'>

// const test : MergedVariant = {} as MergedVariant
// const a = test.variants[0].color.

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
export type ItemCommon = {
    slug: string,
    slugCategory: string,
    best: boolean,
    special: boolean,
    coming: boolean,
}

export type ItemVariant = {
    color: {
        code: string,
        name: string
    },
    sizes: string[],
    images: string[],
    price: number,
}

export type ItemLocaleCommon = {
    name: string,
    category: string,
    oldPrice: number,
    currency: string,
    variants: ItemVariant [],
    description: string,
    composition: string,
    parameters: string,
    delivery: string,
}

export type ClientItem = ItemCommon & ItemVariant & ItemLocaleCommon

export type FetchedItem = {
    common: ItemCommon
} & {
    ua: ItemLocaleCommon,
    ru: ItemLocaleCommon,
    eng: ItemLocaleCommon
}

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
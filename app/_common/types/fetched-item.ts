export type FetchedItem = {
    _id: string,
    updateTime: string,
    volume: number,
    weight: number
    slug: string,
    slugCategory: string,
    best: boolean,
    special: boolean,
    coming: boolean,
    oldPrice: number,
    variants: {
        color: string,
        sizes: string[],
        images: { path: string, url: string } [],
        price: number,
        _id: string
    }[]
    translations: {
        ua: {
            name: string,
            description: string,
            composition: string,
            parameters: string
        },
        eng: {
            name: string,
            description: string,
            composition: string,
            parameters: string
        },
        ru: {
            name: string,
            description: string,
            composition: string,
            parameters: string
        }
    }
}

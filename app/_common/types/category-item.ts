export type CategoryItem = {
    _id: string,
    slug: string,
    slugCategory: string,
    oldPrice: number,
    variants: {
        color: string,
        sizes: string[],
        images: { path: string, url: string } [],
        price: string,
        _id: string
    }[]
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
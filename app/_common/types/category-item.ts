export type CategoryItem = {
    _id: string,
    slug: string,
    slugCategory: string,
    oldPrice: number,
    color: string,
    sizes: string[],
    images: { path: string, url: string } [],
    price: number,
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
export type CartItem = {
    common: {
        slug: string,
        slugCategory: string,
        price: string,
        images: string[],
        size: string,
        color: string,
        _id: string
    },
    translations: {
        ua: {
            name: string,
        },
        eng: {
            name: string
        },
        ru: {
            name: string
        }
    },
    quantity: number
}

export type CartState = {
    items: CartItem []
}
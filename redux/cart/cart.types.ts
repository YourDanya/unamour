export type CartData = {
    name: string,
    category: string,
    slug: string,
    slugCategory: string,
    price: number,
    images: string[],
    size: string,
    color: { code: string, name: string }
}

export type CartItemObject = {
    data: CartData, quantity: number
}

export type CartState = {
    items: CartItemObject []
}
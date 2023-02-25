export type CartItem = {
    common: {
        itemId: string
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
    items: CartItem[],
    orderId: string,
    userFormData: UserFormData | null
}

export type UserFormData = {
    country: string,
    settlementType: string,
    city: string,
    region: string,
    serviceType: string,
    paymentType: string,
    office: string,
    street: string,
    house: string,
    apartment: string,
    name: string,
    surname: string,
    email: string,
    number: string,
    comment: string,
    save: boolean
}



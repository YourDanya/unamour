export type CartItem = {
    common: {
        itemId: string
        slug: string,
        slugCategory: string,
        price: string,
        images: {path: string, url: string}[],
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

export type PaymentData = {
    orderId: string,
    amount: number,
    apiVersion: number,
    currency: string,
    merchantAccount: string,
    merchantDomainName: string,
    merchantSignature: string,
    orderDate: number,
    orderReference: string,
    paymentSystems: string,
    products: PaymentItem[],
    serviceUrl: string,
    returnUrl: string
}

export type PaymentItem = {
    color: string,
    id: string,
    name: string,
    price: string,
    size: string,
    uniqueNameIntheCart: string,
    count: string,
    volume: any,
    weight: any,
}

export type Order = {
    client: {
        phone: string,
        email: string,
        name: string
    },
    payment: {
        amount: number,
        status: 'refunded' | 'pending' | 'approved' | 'declined' | 'expired',
        method: 'online' | 'afterpayment',
        currency: 'UAH'
    },
    delivery: {
        nextDestination: {
            RecipientCityName: string,
            SettlementType: string,
            RecipientArea: string,
            RecipientAreaRegions: string,
            RecipientAddressName: string,
            RecipientHouse: string,
            RecipientFlat: string,
            ServiceType: 'DoorsWarehouse' | 'DoorsDoors'
        },
        deliveryService: 'novaposhta',
        Ref: string,
        CostOnSite: number,
        EstimatedDeliveryDate: string,
        IntDocNumber: string
    },
    _id: string,
    products: {
        id: string,
        name: string,
        count: number,
        color: string,
        size: string,
        images: string [],
        _id: string
    }[],
    weight: string,
    volume: string,
    description: string,
}

export type CreateOrderData = {
    email: string,
    phone: string,
    name: string,
    deliveryService: 'novaposhta',
    'destination': {
        'RecipientCityName': string,
        'SettlementType': string,
        'RecipientArea': string,
        'RecipientAreaRegions': string,
        'RecipientAddressName': string,
        'RecipientHouse': string,
        'RecipientFlat': string,
        'ServiceType': string
    },
    products: {
        id: string,
        color: string,
        size: string,
        count: number
    } []
}

export type CartState = {
    items: CartItem[],
    orderId: string,
    userFormData: UserFormData | null,
    setUserFormData: (useFormData: UserFormData) => void,
    paymentData: null | PaymentData,
    setPaymentData: (paymentData: PaymentData | null) => void,
    order: null | Order,
    setOrder: (order: null | Order) => void,
    addItem: (addItem: CartItem) => void,
    removeItem: (_id: string) => void,
    increaseQuantity: (_id: string) => void,
    decreaseQuantity: (_id: string) => void,
    setOrderId: (orderId: string) => void,
    setCartItems: (items: CartItem[]) => void,
    getItemsQuantity: () => number,
    getTotalPrice: () => number
}
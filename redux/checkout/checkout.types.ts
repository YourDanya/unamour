import {AppThunk} from 'redux/store'
import {StateField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {SelectField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'

export type CheckoutState = {
    fields: Record<CheckoutField, StateField>,
    paymentData: null | PaymentData,
    order: null | Order
}

export type CheckoutField = 'createOrder' | 'getOrder'

export type CreateOrderAsync = (data: CreateOrderData, type: string) => AppThunk

export type GetOrderAsync = (id: string) => AppThunk

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
    products: { id: string, color: string, size: string, count: number } []
}

export type SelectCheckoutField = (field: CheckoutField) => ((state: AppState) => SelectField)

export type CheckoutErrors = ContentErrors<CheckoutField>

export type CheckoutSuccess = ContentSuccess<CheckoutField>

export type PaymentData = {
    amount: number
    apiVersion: number
    currency: string
    merchantAccount: string
    merchantDomainName: string
    merchantSignature: string
    orderDate: number
    orderReference: string
    paymentSystems: string,
    products: PaymentItem[],
    serviceUrl: string,
    returnUrl: string
}

export type PaymentItem = {
    color: string,
    id: string
    name: string
    price: string
    size: string
    uniqueNameIntheCart: string
    count: string
    volume: any
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
        method: 'online',
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

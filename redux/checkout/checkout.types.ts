import {AppThunk} from 'redux/store'
import {StateField} from 'redux/store.types'
import {AppState} from 'redux/store'
import {SelectField} from 'redux/store.types'
import {ContentErrors} from 'redux/store.types'
import {ContentSuccess} from 'redux/store.types'

export type CheckoutState = {
    fields: Record<CheckoutField, StateField>,
    paymentData: null | PaymentData
}

export type CheckoutField = 'createOrder'

export type CreateOrderAsync = (createOrderData: CreateOrderData) => AppThunk

export type CreateOrderData = {
    email: string,
    phone: string,
    name: string,
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
    serviceUrl: string
}

export type PaymentItem = {
    color: string,
    id: string
    name: string
    price: string
    size: string
    uniqueNameIntheCart: "Сукня Love Me white XS"
    count: string
    volume: any
    weight: any,
}
import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {PaymentData} from 'app/[locale]/_redux/checkout/checkout.types'
import {ServerError} from 'app/[locale]/_redux/store.types'
import {CheckoutState} from 'app/[locale]/_redux/checkout/checkout.types'
import {CheckoutField} from 'app/[locale]/_redux/checkout/checkout.types'
import {Order} from 'app/[locale]/_redux/checkout/checkout.types'
import {url} from 'app/[locale]/_common/utils/api/api.utils'

const initialState: CheckoutState = {
    fields: {
        createOrder: {loading: false, success: false, error: null},
        getOrder: {loading: false, success: false, error: null}
    },
    order: null,
    paymentData: null
}

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setCheckoutFieldStart: (state, action: PayloadAction<CheckoutField>) => {
            console.log('setting loading checkout', action.payload)
            const field = action.payload
            state.fields[field].loading = true
        },
        setCheckoutFieldFailure: (state, action: PayloadAction<{ field: CheckoutField, error: ServerError }>) => {
            const {field, error} = action.payload
            state.fields[field] = {loading: false, success: false, error}
        },
        setCheckoutFieldSuccess: (state, action: PayloadAction<CheckoutField>) => {
            state.fields[action.payload] = {success: true, loading: false, error: null}
        },
        setPaymentData: (state, action: PayloadAction<PaymentData | null>) => {
            // action.payload.returnUrl = `${url}/_components`
            if (action.payload === null) {
                state.paymentData = action.payload
                return
            }
            const {orderReference, orderId} = action.payload as PaymentData
            action.payload.returnUrl = `${url}/order/${orderReference ?? orderId}`
            state.paymentData = action.payload
        },
        setOrder: (state, action: PayloadAction<Order>) => {
            state.order = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {
    setCheckoutFieldStart, setCheckoutFieldSuccess, setCheckoutFieldFailure, setPaymentData, setOrder
} = checkoutSlice.actions

export default checkoutSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper'
import {ServerError} from 'redux/store.types'
import {CheckoutState} from 'redux/checkout/checkout.types'
import {CheckoutField} from 'redux/checkout/checkout.types'
import {PaymentData} from 'redux/checkout/checkout.types'
import {url} from 'utils/api/api.utils'

const initialState: CheckoutState = {
    fields: {
        createOrder: {loading: false, success: false, error: null}
    },
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
        setPaymentData: (state, action: PayloadAction<PaymentData>) => {
            action.payload.returnUrl= `${url}/order/${action.payload.orderReference}`
            state.paymentData = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

        }
    }
})

export const {
    setCheckoutFieldStart, setCheckoutFieldSuccess, setCheckoutFieldFailure, setPaymentData
} = checkoutSlice.actions

export default checkoutSlice.reducer
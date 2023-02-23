import {api} from 'utils/api/api.utils'
import {ServerError} from 'redux/store.types'
import {apiCallAsync} from 'utils/api/api.utils'
import {setCheckoutFieldStart} from 'redux/checkout/checkout.slice'
import {setCheckoutFieldFailure} from 'redux/checkout/checkout.slice'
import {setCheckoutFieldSuccess} from 'redux/checkout/checkout.slice'
import {CreateOrderAsync} from 'redux/checkout/checkout.types'
import {setPaymentData} from 'redux/checkout/checkout.slice'

export const createOrderAsync: CreateOrderAsync = (data, type) => {
    return async (dispatch) => {
        dispatch(setCheckoutFieldStart('createOrder'))
        let createOrder = () => api.post('/checkout/create-online-payment-order', data)
        if (type === 'after') {
            createOrder = () => api.post('/checkout/create-after-payment-order', data)
        }
        const setSuccess = () => setCheckoutFieldSuccess('createOrder')
        const createOrderSuccess = [setSuccess, setPaymentData]
        const createOrderFailure = (error: ServerError) => setCheckoutFieldFailure({error, field: 'createOrder'})
        dispatch(apiCallAsync(createOrder, createOrderSuccess, createOrderFailure))
    }
}
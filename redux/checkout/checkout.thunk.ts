import {api} from 'utils/api/api.utils'
import {ServerError} from 'redux/store.types'
import {apiCallAsync} from 'utils/api/api.utils'
import {setCheckoutFieldStart} from 'redux/checkout/checkout.slice'
import {setCheckoutFieldFailure} from 'redux/checkout/checkout.slice'
import {setCheckoutFieldSuccess} from 'redux/checkout/checkout.slice'
import {CreateOrderAsync} from 'redux/checkout/checkout.types'
import {setPaymentData} from 'redux/checkout/checkout.slice'
import {setOrder} from 'redux/checkout/checkout.slice'
import {setOrderId} from 'redux/cart/cart.slice'
import {PaymentData} from 'redux/checkout/checkout.types'
import {GetOrderAsync} from 'redux/checkout/checkout.types'

export const createOrderAsync: CreateOrderAsync = (data, type) => {
    return async (dispatch) => {
        dispatch(setCheckoutFieldStart('createOrder'))
        let createOrder = () => api.post('/checkout/create-online-payment-order', data)
        if (type === 'after') {
            createOrder = () => api.post('/checkout/create-after-payment-order', data)
        }
        const setSuccess = () => setCheckoutFieldSuccess('createOrder')
        const setId = ({orderReference}: PaymentData) => setOrderId(orderReference)
        const createOrderSuccess = [setSuccess, setPaymentData, setId]
        const createOrderFailure = (error: ServerError) => setCheckoutFieldFailure({error, field: 'createOrder'})
        dispatch(apiCallAsync(createOrder, createOrderSuccess, createOrderFailure))
    }
}

export const getOrderAsync: GetOrderAsync = (id) => {
    return async (dispatch) => {
        dispatch(setCheckoutFieldStart('getOrder'))
        const getOrder = () => api.get(`checkout/order-by-id/${id}`)
        const setSuccess = () => setCheckoutFieldSuccess('getOrder')
        const getOrderSuccess = [setSuccess, setOrder]
        const getOrderFailure = (error: ServerError) => setCheckoutFieldFailure({error, field: 'getOrder'})
        dispatch(apiCallAsync(getOrder, getOrderSuccess, getOrderFailure))
    }
}
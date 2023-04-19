import {api} from 'app/[locale]/_common/utils/api/api.utils'
import {ServerError} from 'app/[locale]/_redux/store.types'
import {apiCallAsync} from 'app/[locale]/_common/utils/api/api.utils'
import {setCheckoutFieldStart} from 'app/[locale]/_redux/checkout/checkout.slice'
import {setCheckoutFieldFailure} from 'app/[locale]/_redux/checkout/checkout.slice'
import {setCheckoutFieldSuccess} from 'app/[locale]/_redux/checkout/checkout.slice'
import {CreateOrderAsync} from 'app/[locale]/_redux/checkout/checkout.types'
import {setPaymentData} from 'app/[locale]/_redux/checkout/checkout.slice'
import {setOrder} from 'app/[locale]/_redux/checkout/checkout.slice'
import {setOrderId} from 'app/[locale]/_redux/cart/cart.slice'
import {PaymentData} from 'app/[locale]/_redux/checkout/checkout.types'
import {GetOrderAsync} from 'app/[locale]/_redux/checkout/checkout.types'

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
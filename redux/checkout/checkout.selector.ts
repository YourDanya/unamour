import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'
import {selectLocale} from 'redux/main/main.selectors'
import {mapField} from 'utils/main/main.utils'
import {checkoutSuccess} from 'redux/checkout/checkout.content'
import {checkoutErrors} from 'redux/checkout/checkout.content'
import {SelectCheckoutField} from 'redux/checkout/checkout.types'
import {CheckoutField} from 'redux/checkout/checkout.types'


export const selectCheckout = (state: AppState) => state.checkout

export const selectCheckoutField: SelectCheckoutField = ((field: CheckoutField) => {
    return createSelector(
        [selectCheckout, selectLocale], (checkoutStore, locale) => {
            let checkoutField = checkoutStore.fields?.[field]
            if (!checkoutField) {
                checkoutField = {loading: false, error: null, success: false}
            }
            return mapField(field, checkoutField, locale, checkoutErrors, checkoutSuccess)
        }
    )
}) as SelectCheckoutField

export const selectPaymentData = createSelector(
    [selectCheckout], (checkoutStore) => {
        return checkoutStore.paymentData
    }
)
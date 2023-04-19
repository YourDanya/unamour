import {selectLocale} from 'app/[locale]/_redux/main/main.selectors'
import {createSelector} from '@reduxjs/toolkit'
import {mapField} from 'app/[locale]/_common/utils/main/main.utils'
import {checkoutSuccess} from 'app/[locale]/_redux/checkout/checkout.content'
import {AppState} from 'app/[locale]/_redux/store'
import {checkoutErrors} from 'app/[locale]/_redux/checkout/checkout.content'
import {SelectCheckoutField} from 'app/[locale]/_redux/checkout/checkout.types'
import {CheckoutField} from 'app/[locale]/_redux/checkout/checkout.types'

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
}) as unknown as SelectCheckoutField

export const selectPaymentData = createSelector(
    [selectCheckout], (checkoutStore) => {
        return checkoutStore.paymentData
    }
)

export const selectOrder = createSelector(
    [selectCheckout], (checkoutStore) => checkoutStore.order
)
import {ShopItemsField} from 'app/[locale]/_redux/shop-items/shop-items.types'
import {shopItemsErrors} from 'app/[locale]/_redux/shop-items/shop-items.content'
import {selectLocale} from 'app/[locale]/_redux/main/main.selectors'
import {createSelector} from '@reduxjs/toolkit'
import {mapField} from 'app/[locale]/_common/utils/main/main.utils'
import {shopItemsSuccess} from 'app/[locale]/_redux/shop-items/shop-items.content'
import {AppState} from 'app/[locale]/_redux/store'

export const selectShopItemsStore = (state: AppState) => state.shopItems

export const selectShopItemsField = ((field: ShopItemsField) => {
    return createSelector(
        [selectShopItemsStore, selectLocale],
        (shopItemsStore, locale) => {
            const userField = shopItemsStore.fields[field]
            return mapField(field, userField, locale, shopItemsErrors, shopItemsSuccess)
        }
    )
})

export const selectSearchItems = createSelector(
    [selectShopItemsStore],
    (shopItemsStore) => shopItemsStore.searchItems
)


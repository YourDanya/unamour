import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'
import {SelectUserField} from 'redux/user/user.types'
import {UserField} from 'redux/user/user.types'
import {selectLocale} from 'redux/main/main.selectors'
import {mapField} from 'utils/main/main.utils'
import {userErrors} from 'redux/user/user.content'
import {userSuccess} from 'redux/user/user.content'
import {selectUserStore} from 'redux/user/user.selectors'
import {ShopItemsField} from 'redux/shop-items/shop-items.types'
import {shopItemsErrors} from 'redux/shop-items/shop-items.content'
import {shopItemsSuccess} from 'redux/shop-items/shop-items.content'

export const selectShopItemsStore = (state: AppState) => state.shopItems

export const selectFetchedItems = createSelector([selectShopItemsStore],
    shopItems => shopItems.fetchedItems
)

export const selectClientItems = createSelector([selectShopItemsStore],
    items => items.clientItems
)

export const selectShopItemsField = ((field: ShopItemsField) => {
    return createSelector(
        [selectShopItemsStore, selectLocale], (shopItemsStore, locale) => {
            const userField = shopItemsStore.fields[field]
            return mapField(field, userField, locale, shopItemsErrors, shopItemsSuccess)
        }
    )
})
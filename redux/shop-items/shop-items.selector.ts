import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'

export const selectClientItemsStore = (state: AppState) => state.shopItems

export const selectFetchedItems = createSelector([selectClientItemsStore],
    shopItems => shopItems.fetchedItems
)

export const selectClientItems = createSelector([selectClientItemsStore],
    items => items.clientItems
)
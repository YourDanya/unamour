import {AppState} from 'redux/store'
import {createSelector} from '@reduxjs/toolkit'

export const selectUserStore = (state: AppState) => state.test

export const selectX = createSelector([selectUserStore], (userStore) => userStore.x)

export const selectY = createSelector([selectUserStore], (userStore) => userStore.y)

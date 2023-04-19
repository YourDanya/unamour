import {AppState} from 'app/[locale]/_redux/store'
import {createSelector} from '@reduxjs/toolkit'

export const selectMainStore = (state: AppState) => state.main

export const selectLocale = createSelector(
    [selectMainStore], mainStore => mainStore.locale
)

export const selectPath = createSelector(
    [selectMainStore], mainStore => mainStore.path
)


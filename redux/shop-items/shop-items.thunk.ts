import {AppThunk} from 'redux/store'
import {apiCallAsync} from 'utils/api/api.utils'
import {getItemsError} from 'redux/shop-items/shop-items.slice'
import {api} from 'utils/api/api.utils'
import {getItemsSuccess} from 'redux/shop-items/shop-items.slice'

export const getItems = (): AppThunk => {
    return async (dispatch) => {
        const getShopItemAll = () => api.get('/shop-item/all')
        return dispatch(apiCallAsync(getShopItemAll, getItemsSuccess, getItemsError))
    }
}

export const getCategoryItems = (): AppThunk => {
    return async (dispatch) => {
        const getShopItemAll = () => api.get('/shop-item/category')
        return dispatch(apiCallAsync(getShopItemAll, getItemsSuccess, getItemsError))
    }
}
import {AppThunk} from 'redux/store'
import {apiCallAsync} from 'utils/api/api.utils'
import {fetchItemsError} from 'redux/shop-items/shop-items.slice'
import {Api} from 'utils/api/api.utils'
import {fetchItemsSuccess} from 'redux/shop-items/shop-items.slice'

export const fetchItems = (): AppThunk => {
    return async (dispatch) => {
        const getShopItemAll = () => Api.get('/shop-item/all')
        return dispatch(apiCallAsync(getShopItemAll, fetchItemsSuccess, fetchItemsError))
    }
}

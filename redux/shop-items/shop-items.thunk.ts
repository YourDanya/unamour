import {AppThunk} from "../store"
import {Api, apiCallThunk} from "../../utils/api.utils"
import {fetchItemsError, fetchItemsSuccess} from "./shop-items.slice"

export const fetchItems = (): AppThunk => {
    return async (dispatch) => {
        const getShopItemAll = () => Api.get('/shop-item/all')
        return dispatch(apiCallThunk(getShopItemAll, fetchItemsSuccess, fetchItemsError))
    }
}

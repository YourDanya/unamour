import {AppThunk} from 'redux/store'
import {apiCallAsync} from 'utils/api/api.utils'
import {api} from 'utils/api/api.utils'
import {setShopItemFieldSuccess} from 'redux/shop-items/shop-items.slice'
import {setShopItemFieldFailure} from 'redux/shop-items/shop-items.slice'
import {ServerError} from 'redux/store.types'
import {SearchItems} from 'redux/shop-items/shop-items.types'
import {CategoryItem} from 'redux/shop-items/shop-items.types'
import {setSearchItems} from 'redux/shop-items/shop-items.slice'
import {setShopItemFieldStart} from 'redux/shop-items/shop-items.slice'

export const searchItemsAsync: SearchItems = (searchItemsData) => {
    return async(dispatch) => {
        dispatch(setShopItemFieldStart('searchItems'))
        const searchItems = () => api.post('/shop-item/search', searchItemsData)
        const setSuccess = () => setShopItemFieldSuccess('searchItems')
        const setItems = ({items}: {items: CategoryItem[]}) => setSearchItems(items)
        const searchItemsSuccess = [setSuccess, setItems]
        const searchItemsError = (error: ServerError) => setShopItemFieldFailure({field: 'searchItems', error})
        dispatch(apiCallAsync(searchItems, searchItemsSuccess, searchItemsError))
    }
}


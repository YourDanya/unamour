import {AppThunk} from 'app/[locale]/_redux/store'
import {apiCallAsync} from 'app/[locale]/_common/utils/api/api.utils'
import {api} from 'app/[locale]/_common/utils/api/api.utils'
import {setShopItemFieldSuccess} from 'app/[locale]/_redux/shop-items/shop-items.slice'
import {setShopItemFieldFailure} from 'app/[locale]/_redux/shop-items/shop-items.slice'
import {ServerError} from 'app/[locale]/_redux/store.types'
import {SearchItems} from 'app/[locale]/_redux/shop-items/shop-items.types'
import {CategoryItem} from 'app/[locale]/_redux/shop-items/shop-items.types'
import {setSearchItems} from 'app/[locale]/_redux/shop-items/shop-items.slice'
import {setShopItemFieldStart} from 'app/[locale]/_redux/shop-items/shop-items.slice'

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


import {Api} from 'utils/api/api.utils'
import {UpdateItemAsync} from 'redux/admin/admin.types'
import {ServerError} from 'redux/store.types'
import {setAdminFieldSuccess} from 'redux/admin/admin.slice'
import {setAdminFieldFailure} from 'redux/admin/admin.slice'
import {apiCallAsync} from 'utils/api/api.utils'
import {setAdminFieldStart} from 'redux/admin/admin.slice'

export const updateItemAsync : UpdateItemAsync = (item, slug) => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'updateItem', slug: slug}))
        const updateItem = () => Api.put(`/shop-item/${slug}`, {item})
        const updateItemSuccess = () => setAdminFieldSuccess({field: 'updateItem', slug})
        const updateItemFailure = (error: ServerError) => setAdminFieldFailure({error, field: 'updateItem', slug})
        dispatch(apiCallAsync(updateItem, updateItemSuccess, updateItemFailure))
    }
}


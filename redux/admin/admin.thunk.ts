import {Api} from 'utils/api/api.utils'
import {UpdateItemAsync} from 'redux/admin/admin.types'
import {ServerError} from 'redux/store.types'
import {setAdminFieldSuccess} from 'redux/admin/admin.slice'
import {setAdminFieldFailure} from 'redux/admin/admin.slice'
import {apiCallAsync} from 'utils/api/api.utils'
import {setAdminFieldStart} from 'redux/admin/admin.slice'

export const updateItemAsync : UpdateItemAsync = (item, _id) => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'updateItem', _id}))
        const updateItem = () => Api.put(`/shop-item/${_id}`, {item})
        const updateItemSuccess = () => setAdminFieldSuccess({field: 'updateItem', _id})
        const updateItemFailure = (error: ServerError) => setAdminFieldFailure({error, field: 'updateItem', _id})
        dispatch(apiCallAsync(updateItem, updateItemSuccess, updateItemFailure))
    }
}


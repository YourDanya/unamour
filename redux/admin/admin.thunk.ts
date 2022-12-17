import {Api} from 'utils/api/api.utils'
import {UpdateItemAsync} from 'redux/admin/admin.types'
import {StateError} from 'redux/store.types'
import {setAdminFieldSuccess} from 'redux/admin/admin.slice'
import {setAdminFieldFailure} from 'redux/admin/admin.slice'
import {apiCallAsync} from 'utils/api/api.utils'
import {setAdminFieldStart} from 'redux/admin/admin.slice'

export const updateItemAsync : UpdateItemAsync = (item, slug) => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'updateItem', slug: slug}))
        const updateItem = () => Api.patch(`/shop-item/${slug}`, item)
        const updateItemSuccess = () => setAdminFieldSuccess({field: 'updateItem', slug})
        const updateItemFailure = (error: StateError) => setAdminFieldFailure({error, field: 'updateItem', slug})
        dispatch(apiCallAsync(updateItem, updateItemSuccess, updateItemFailure))
    }
}


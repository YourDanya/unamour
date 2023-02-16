import {api} from 'utils/api/api.utils'
import {UpdateItemAsync} from 'redux/admin/admin.types'
import {ServerError} from 'redux/store.types'
import {setAdminFieldSuccess} from 'redux/admin/admin.slice'
import {setAdminFieldFailure} from 'redux/admin/admin.slice'
import {apiCallAsync} from 'utils/api/api.utils'
import {setAdminFieldStart} from 'redux/admin/admin.slice'
import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {CreateItemAsync} from 'redux/admin/admin.types'
import {DeleteItemAsync} from 'redux/admin/admin.types'
import {AppThunk} from 'redux/store'
import {setAdminItem} from 'redux/admin/admin.slice'
import {setAdminItemDeleted} from 'redux/admin/admin.slice'
import {setAdminItems} from 'redux/admin/admin.slice'

export const updateItemAsync : UpdateItemAsync = (item, _id) => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'updateItem', _id}))
        let updateItem = () => api.put(`/shop-item/${_id}`, {item})
        const setSuccess = () => setAdminFieldSuccess({field: 'updateItem', _id})
        const setItem = ({item}: {item: FetchedItem}) => setAdminItem(item)
        const updateItemSuccess = [setSuccess, setItem]
        const updateItemFailure = (error: ServerError) => setAdminFieldFailure({error, field: 'updateItem', _id})
        dispatch(apiCallAsync(updateItem, updateItemSuccess, updateItemFailure))
    }
}

export const createItemAsync : CreateItemAsync = (item, _id) => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'createItem', _id}))
        const createItem = () => api.post(`/shop-item/`, {item})
        const setSuccess = ({item: {_id}} : {item: FetchedItem}) => setAdminFieldSuccess({field: 'createItem', _id})
        const setItem = ({item}: {item: FetchedItem}) => setAdminItem(item)
        const createItemSuccess = [setSuccess, setItem]
        const createItemFailure = (error: ServerError) => setAdminFieldFailure({error, field: 'createItem'})
        dispatch(apiCallAsync(createItem, createItemSuccess, createItemFailure))
    }
}

export const deleteItemAsync : DeleteItemAsync = ( _id) => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'deleteItem', _id}))
        const deleteItem = () => api.delete(`/shop-item/${_id}`)
        const setSuccess = () => setAdminFieldSuccess({field: 'deleteItem', _id})
        const setItem = () => setAdminItemDeleted(_id)
        const deleteItemSuccess = [setSuccess, setItem]
        const deleteItemFailure = (error: ServerError) => setAdminFieldFailure({error, field: 'deleteItem'})
        dispatch(apiCallAsync(deleteItem, deleteItemSuccess, deleteItemFailure))
    }
}

export const getItemsAsync = (): AppThunk => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'getItems'}))
        const getItems = () => api.get('/shop-item/all')
        const setSuccess = () => setAdminFieldSuccess({field: 'getItems'})
        const getItemsSuccess = [setSuccess, setAdminItems]
        const getItemsError = (error: ServerError) => setAdminFieldFailure({field: 'getItems', error})
        dispatch(apiCallAsync(getItems, getItemsSuccess, getItemsError))
    }
}

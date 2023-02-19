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
import {UpdateItemImagesAsync} from 'redux/admin/admin.types'
import {CreateItemImagesAsync} from 'redux/admin/admin.types'
import {DeleteItemImagesAsync} from 'redux/admin/admin.types'

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

export const updateItemImagesAsync : UpdateItemImagesAsync = ({data, _id}) => {
    return async (dispatch) => {
        dispatch(setAdminFieldStart({field: 'updateItemImages', _id}))
        // data.forEach(elem => console.log('elem', elem))
        const updateItemImages = () => api.post(`/edit-files-by-ids`, data,
            {headers: { 'Content-Type': 'multipart/form-data' }})
        const setSuccess = () => setAdminFieldSuccess({field: 'updateItemImages', _id})
        const updateItemImagesSuccess = [setSuccess]
        const updateItemImagesError = (error: ServerError) => setAdminFieldFailure({field: 'updateItemImages',
            error, _id})
        dispatch(apiCallAsync(updateItemImages, updateItemImagesSuccess, updateItemImagesError))
    }
}

export const createItemImagesAsync : CreateItemImagesAsync = (data) => {
    return async (dispatch) => {
        const _id = data.get('_id') as string
        dispatch(setAdminFieldStart({field: 'createItemImages', _id}))
        data.forEach(elem => console.log('creating element', elem))
        const createItemImages = () => api.post(`/shop-item/add-images`, data,
            {headers: { 'Content-Type': 'multipart/form-data' }})
        const setSuccess = () => setAdminFieldSuccess({field: 'createItemImages', _id})
        const setItem = ({item}: {item: FetchedItem}) => setAdminItem(item)
        const createItemImagesSuccess = [setSuccess, setItem]
        const createItemImagesError = (error: ServerError) => setAdminFieldFailure(
            {field: 'createItemImages', error, _id})
        dispatch(apiCallAsync(createItemImages, createItemImagesSuccess, createItemImagesError))
    }
}

export const deleteItemImagesAsync : DeleteItemImagesAsync = (data) => {
    return async (dispatch) => {
        const _id = data._id
        dispatch(setAdminFieldStart({field: 'deleteItemImages', _id}))
        // Object.entries(data).forEach(elem => console.log('elem', elem))
        const deleteItemImages = () => api.post(`/shop-item/remove-images`, data)
        const setSuccess = () => setAdminFieldSuccess({field: 'deleteItemImages', _id})
        const setItem = ({item}: {item: FetchedItem}) => setAdminItem(item)
        const deleteItemImagesSuccess = [setSuccess, setItem]
        const deleteItemImagesError = (error: ServerError) => setAdminFieldFailure({field: 'deleteItemImages',
            error, _id})
        dispatch(apiCallAsync(deleteItemImages, deleteItemImagesSuccess, deleteItemImagesError))
    }
}


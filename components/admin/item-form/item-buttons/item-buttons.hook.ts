import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectAdminField} from 'redux/admin/admin.selectors'
import {SelectWithClientErr} from 'redux/admin/admin.types'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'
import {useLocale} from 'hooks/other/other.hooks'
import {itemButtonsContent} from 'components/admin/item-form/item-buttons/item-buttons.content'
import {MouseAction} from 'types/types'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {updateItemAsync} from 'redux/admin/admin.thunk'
import {resetAdminFieldSuccess} from 'redux/admin/admin.slice'
import {useEffect, memo} from 'react'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {AdminIdField} from 'redux/admin/admin.types'
import {SelectField} from 'redux/store.types'
import {createItemAsync} from 'redux/admin/admin.thunk'
import {useOmitFirstLayoutEffect} from 'hooks/component/component.hooks'
import {deleteItemAsync} from 'redux/admin/admin.thunk'
import {removeAdminDeletedItem} from 'redux/admin/admin.slice'
// import {_selectAdminField} from 'redux/admin/admin.selectors'
// import {useSelector} from 'react-redux'
// import {AppState} from 'redux/store'

const useItemButtons = (props: ItemButtonsProps) => {
    const {itemValueRef, _id} = props
    const [transl] = useLocale(itemButtonsContent)

    // const updateItemState = useSelector((state : AppState) => _id? _selectAdminField(state, 'updateItem', _id) : null) as SelectWithClientErr
    const updateItemState = useParamSelector(selectAdminField, 'updateItem', _id) as SelectWithClientErr
    const createItemState = useParamSelector(selectAdminField, 'createItem', _id) as SelectWithClientErr
    const deleteItemState = useParamSelector(selectAdminField, 'deleteItem', _id) as SelectField

    // if (!_id) {
    //     console.log('createItemState.loading', createItemState.loading)
    //     console.log('updateItemState.loading', updateItemState.loading)
    //     console.log('deleteItemState.loading', deleteItemState.loading)
    // }

    const [isMessage, setMessage] = useState({client: false, updateItem: false, createItem: false, deleteItem: false})
    // console.log('render item-buttons', _id[_id.length - 2] + _id[_id.length - 1])

    const dispatch = useDispatch()
    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (updateItemState.error.client || createItemState.error.client) {
            setMessage({...isMessage, client: true})
        } else {
            if (_id) {
                dispatch(updateItemAsync(itemValueRef.current, _id))
            } else {
                dispatch(createItemAsync(itemValueRef.current, _id))
            }
        }
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
        if (_id) {
            dispatch(deleteItemAsync(_id))
        } else {
            dispatch(removeAdminDeletedItem())
        }
    }

    const onDeleteExpiration = () => {
        dispatch(removeAdminDeletedItem())
    }

    const onClose: MouseAction = (event) => {
        event.preventDefault()
        const field = event.currentTarget.getAttribute('data-value') as keyof typeof isMessage
        setMessage({...isMessage, [field]: false})
    }

    const onTimerExpiration = (field: AdminIdField) => {
        setMessage({...isMessage, [field]: false})
        dispatch(resetAdminFieldSuccess({field, _id}))
        if (field === 'deleteItem') {
            dispatch(removeAdminDeletedItem())
        }
    }

    useOmitFirstEffect(() => {
        if (!updateItemState.error.client) {
            setMessage({...isMessage, client: false})
        }
    }, [updateItemState.error.client])

    useOmitFirstLayoutEffect(() => {
        if (!createItemState.error.client) {
            setMessage({...isMessage, client: false})
        }
    }, [createItemState.error.client])

    useEffect(() => {
        const updateItem = !!updateItemState.error.server || !!updateItemState.success
        if (isMessage.updateItem !== updateItem) {
            setMessage({...isMessage, updateItem})
        }
    }, [updateItemState.error.server, updateItemState.success])

    useEffect(() => {
        const createItem = !!createItemState.error.server || !!createItemState.success
        if (isMessage.createItem !== createItem) {
            setMessage({...isMessage, createItem})
        }
    }, [createItemState.error, createItemState.success])

    useEffect(() => {
        const deleteItem = !!deleteItemState.error || !!deleteItemState.success
        if (isMessage.deleteItem !== deleteItem) {
            setMessage({...isMessage, deleteItem})
        }
    }, [deleteItemState.error, deleteItemState.success])

    return {updateItemState, transl, onSave, onDelete, isMessage, onClose, onTimerExpiration, createItemState,
    deleteItemState, onDeleteExpiration}
}

export default useItemButtons
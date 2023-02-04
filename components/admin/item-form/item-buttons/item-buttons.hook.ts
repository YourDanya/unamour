import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectAdminField} from 'redux/admin/admin.selectors'
import {SelectUpdateItem} from 'redux/admin/admin.types'
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
// import {_selectAdminField} from 'redux/admin/admin.selectors'
// import {useSelector} from 'react-redux'
// import {AppState} from 'redux/store'


const useItemButtons = (props: ItemButtonsProps) => {
    const {itemValueRef} = props
    const [transl] = useLocale(itemButtonsContent)
    const _id = itemValueRef.current._id

    // const updateItemState = useSelector((state : AppState) => _id? _selectAdminField(state, 'updateItem', _id) : null) as SelectUpdateItem
    const updateItemState = useParamSelector(selectAdminField, 'updateItem', _id) as SelectUpdateItem

    const [isMessage, setMessage] = useState({client: false, server: false})
    // console.log('render item-buttons', _id[_id.length - 2] + _id[_id.length - 1])

    const dispatch = useDispatch()
    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (_id) {
            if (updateItemState.error.client) {
                setMessage({...isMessage, client: true})
            } else {
                dispatch(updateItemAsync(itemValueRef.current, _id))
            }
        }
        else {

        }
    }

    const [count, setCount] = useState(0)

    const onIncrement: MouseAction = (event) => {
        event.preventDefault()
        setCount(count + 1)
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
    }

    const onClose: MouseAction = (event) => {
        event.preventDefault()
        const value = event.currentTarget.getAttribute('data-value') as keyof typeof isMessage
        setMessage({...isMessage, [value]: false})
    }

    const onSuccessTimerExpiration = () => {
        setMessage({...isMessage, server: false})
        dispatch(resetAdminFieldSuccess({field: 'updateItem', _id}))
    }

    useOmitFirstEffect(() => {
        if (!updateItemState.error.client) {
            setMessage({...isMessage, client: false})
        }
    }, [updateItemState.error.client])

    useEffect(() => {
        const server = !!updateItemState.error.server || !!updateItemState.success
        if (isMessage.server !== server) {
            setMessage({...isMessage, server})
        }
    }, [updateItemState.error.server, updateItemState.success])

    return {updateItemState, transl, onSave, onDelete, isMessage, onClose, onSuccessTimerExpiration,count, onIncrement}
}

export default useItemButtons
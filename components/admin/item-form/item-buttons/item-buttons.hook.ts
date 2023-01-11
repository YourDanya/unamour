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
import {useEffect} from 'react'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'

const useItemButtons = (props: ItemButtonsProps) => {
    const {slug, itemValueRef} = props
    const [transl] = useLocale(itemButtonsContent)
    const updateItemState = useParamSelector(selectAdminField, 'updateItem', slug) as SelectUpdateItem
    const [isMessage, setMessage] = useState({client: false, server: false})

    const dispatch = useDispatch()

    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (updateItemState.error.client) {
            setMessage({...isMessage, client: true})
        } else {
            dispatch(updateItemAsync(itemValueRef.current, slug))
        }
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
        dispatch(resetAdminFieldSuccess({field: 'updateItem', slug}))
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

    return {updateItemState, transl, onSave, onDelete, isMessage, onClose, onSuccessTimerExpiration}
}

export default useItemButtons
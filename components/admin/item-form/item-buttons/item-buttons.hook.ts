import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectAdminField} from 'redux/admin/admin.selectors'
import {SelectUpdateItem} from 'redux/admin/admin.types'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'
import {useLocale} from 'hooks/other/other.hooks'
import {itemButtonsContent} from 'components/admin/item-form/item-buttons/item-buttons.content'
import {MouseAction} from 'types/types'
import {useState} from 'react'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {updateItemAsync} from 'redux/admin/admin.thunk'

const useItemButtons = (props: ItemButtonsProps) => {
    const {slug, itemValueRef} = props
    const [transl] = useLocale(itemButtonsContent)
    const updateItemState = useParamSelector(selectAdminField, 'updateItem', slug) as SelectUpdateItem
    const [isClientError, setClientError] = useState(false)

    const dispatch = useDispatch()

    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (updateItemState.error.client) {
            setClientError(true)
        } else {
            dispatch(updateItemAsync(itemValueRef.current, slug))
        }
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
    }

    const onClose: MouseAction = (event) => {
        event.preventDefault()
        setClientError(false)
    }

    useEffect(() => {
        if (!updateItemState.error.client) {
            setClientError(false)
        }
    }, [updateItemState.error.client])

    return {updateItemState, transl, onSave, onDelete, isClientError, onClose}
}

export default useItemButtons
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectAdminField} from 'redux/admin/admin.selectors'
import {SelectUpdateItem} from 'redux/admin/admin.types'
import {ItemButtonsProps} from 'components/admin/item-form/item-buttons/item-buttons.types'
import {useLocale} from 'hooks/other/other.hooks'
import {itemButtonsContent} from 'components/admin/item-form/item-buttons/item-buttons.content'
import {MouseAction} from 'types/types'
import {useState} from 'react'
import {useEffect} from 'react'

const useItemButtons = (props: ItemButtonsProps) => {
    const [transl] = useLocale(itemButtonsContent)
    const {slug, itemErrRef} = props
    const updateItemState = useParamSelector(selectAdminField, 'updateItem', slug) as SelectUpdateItem
    const [isClientError, setClientError] = useState(false)

    const onSave: MouseAction = (event) => {
        event.preventDefault()
        if (updateItemState.error.client) {
            setClientError(true)
        }
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        if (!updateItemState.error.client) {
            setClientError(false)
        }
    }, [updateItemState.error.client])

    // useLayoutEffect(() => {
    //     setAdminField({field: 'updateItem', slug, value: {loading: false, success: false, error: null}})
    // }, [])

    return {updateItemState, transl, onSave, onDelete, isClientError}
}

export default useItemButtons
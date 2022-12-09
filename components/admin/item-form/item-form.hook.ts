import {useRef} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import itemFormContent from 'components/admin/item-form/item-form.content'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import {MouseAction} from 'types/types'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectAdminField} from 'redux/admin/admin.selectors'
import {useLayoutEffect} from 'react'
import {setAdminField} from 'redux/admin/admin.slice'

const useItemForm = (props: ItemFormProps) => {
    const {common: {slug}} = props
    const [transl] = useLocale(itemFormContent)
    const ref = useRef(props)

    const onSave: MouseAction = (event) => {
        event.preventDefault()
    }

    const onDelete: MouseAction = (event) => {
        event.preventDefault()
    }

    const updateItem = useParamSelector(selectAdminField, 'updateItem', slug)

    useLayoutEffect(() => {
        setAdminField({field: 'updateItem', slug, value: {loading: false, success: false, error: null}})
    }, [])

    return {ref, onSave, onDelete, transl, updateItem}
}

export default useItemForm
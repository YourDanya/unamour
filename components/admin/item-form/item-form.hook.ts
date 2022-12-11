import {useRef} from 'react'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'

const useItemForm = (props: ItemFormProps) => {
    const {common: {slug}} = props
    const itemValueRef = useRef(props)
    const itemErrRef = useRef(0)

    return {itemValueRef, itemErrRef}
}

export default useItemForm
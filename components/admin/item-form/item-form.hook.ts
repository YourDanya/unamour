import {useRef} from 'react'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import {useLocale} from 'hooks/other/other.hooks'
import itemFormContent from 'components/admin/item-form/item-form.content'

const useItemForm = (props: ItemFormProps) => {
    const {common} = props
    const itemValueRef = useRef(props)
    const itemErrRef = useRef(0)
    const [transl] = useLocale(itemFormContent)
    return {itemValueRef, itemErrRef, transl}
}

export default useItemForm
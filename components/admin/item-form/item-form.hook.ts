import {useRef} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import itemFormContent from 'components/admin/item-form/item-form.content'
import {ItemFormProps} from 'components/admin/item-form/item-form.types'
import {MouseAction} from 'types/types'

const useItemForm = (props: ItemFormProps) => {
    const [transl] = useLocale(itemFormContent)

    const ref = useRef(props)

    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
    }

    const onSave: MouseAction = (event) => {
        event.preventDefault()
        console.log('ref obj', ref.current)
    }


    return {ref, onAddVariant,  onSave, transl}
}

export default useItemForm
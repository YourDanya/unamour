import {FetchedItem} from 'redux/shop-items/shop-items.types'
import {useRef} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import itemFormContent from 'components/admin/item-form/item-form.content'

const useItemForm = (props: FetchedItem) => {
    const {common: {...otherCommon}, translations} = props
    const [transl] = useLocale(itemFormContent)

    const ref = useRef(props)
    const onVariantAdd = () => {}
    const onSave = () => {}

    return {ref, onVariantAdd,  onSave, transl}
}

export default useItemForm
import {useLocale} from 'hooks/other/other.hooks'
import itemVariantsContent from 'components/admin/items/item-form/item-variants/item-variants.content'
import {MouseAction} from 'types/types'
import {ItemVariant} from 'components/admin/items/item-form/item-form.types'
import {useItemFormStore} from 'components/admin/items/item-form/store/item-form.store'

const useItemVariants = () => {
    const [transl] = useLocale(itemVariantsContent)

    const {
        itemValue: {common: {variants}}, itemValueRef, setItemValue, itemImagesValuesRef, setItemImagesValues
    } = useItemFormStore(state => state)

    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
        const newVariant: ItemVariant = {color: '', images: [], sizes: [], price: ''} as unknown as ItemVariant
        itemValueRef.current = {
            ...itemValueRef.current, common: {
                ...itemValueRef.current.common,
                variants: [...itemValueRef.current.common.variants, newVariant]
            }
        }
        itemImagesValuesRef.current.push({})
        setItemValue(itemValueRef.current)
    }

    return {transl, variants, onAddVariant}
}

export default useItemVariants

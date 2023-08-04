import {ItemVariant} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {MouseAction} from 'app/_common/types/types'
import itemVariantsContent from 'app/[locale]/admin/items/_components/item-form/item-variants/item-variants.content'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'

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

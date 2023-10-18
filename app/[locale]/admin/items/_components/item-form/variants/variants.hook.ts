import {ItemVariant} from 'app/[locale]/admin/items/_components/item-form/item-form.types'
import {MouseAction} from 'app/_common/types/types'
import {dictionary} from 'app/[locale]/admin/items/_components/item-form/variants/variants.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
import {ItemVariantsProps} from 'app/[locale]/admin/items/_components/item-form/variants/variants.types'
const useItemVariants = (props: ItemVariantsProps) => {
    const transl = useLocale(dictionary)
    const onAddVariant: MouseAction = (event) => {
        event.preventDefault()
        const newVariant: ItemVariant = {color: '', images: [], sizes: [], price: 0} as unknown as ItemVariant
    }

    const {itemValue: {variants}} = props

    return {transl, onAddVariant, variants}
}

export default useItemVariants

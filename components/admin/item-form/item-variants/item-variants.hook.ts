import {useLocale} from 'hooks/other/other.hooks'
import itemVariantsContent from 'components/admin/item-form/item-variants/item-variants.content'

const useItemVariants = () => {
    const [transl] = useLocale(itemVariantsContent)
    return {transl}
}

export default useItemVariants
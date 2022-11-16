import {useLocale} from 'hooks/other/other.hooks'
import itemTranslationContent from 'components/admin/item-form/item-translations/item-translation.content'

const useItemTranslations = () => {
    const [transl] = useLocale(itemTranslationContent)
    return {transl}
}

export default useItemTranslations
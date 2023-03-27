import {useLocale} from 'hooks/other/other.hooks'
import itemTranslationContent from 'components/admin/items/item-form/item-translations/item-translations.content'
import {useItemFormContext} from 'components/admin/items/item-form/store/store'

const useItemTranslations = () => {
    const [transl] = useLocale(itemTranslationContent)

    const translations = useItemFormContext(state => state.itemValue.translations)

    return {transl, translations}
}



export default useItemTranslations
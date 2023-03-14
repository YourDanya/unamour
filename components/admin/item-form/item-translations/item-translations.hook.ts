import {useLocale} from 'hooks/other/other.hooks'
import itemTranslationContent from 'components/admin/item-form/item-translations/item-translations.content'
import {useItemFormContext} from 'components/admin/item-form/store/store'

const useItemTranslations = () => {
    const [transl] = useLocale(itemTranslationContent)

    const translations = useItemFormContext(state => state.itemValue.translations)

    return {transl, translations}
}



export default useItemTranslations
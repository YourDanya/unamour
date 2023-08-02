import {useCallback} from 'react'
import {useItemFormStore} from 'app/[locale]/admin/items/_components/item-form/store/item-form.store'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'
import itemTranslationsContent from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translations.content'

const useItemTranslations = () => {
    const [transl] = useLocale(itemTranslationsContent)

    const translations = useItemFormStore(useCallback((state) => {
        return state.itemValue.translations
    }, []))

    return {transl, translations}
}



export default useItemTranslations
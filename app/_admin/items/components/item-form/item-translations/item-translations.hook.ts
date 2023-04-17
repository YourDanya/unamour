import {useLocale} from 'hooks/other/other.hooks'
import itemTranslationContent from 'components/admin/items/item-form/item-translations/item-translations.content'
import {useItemFormStore} from 'components/admin/items/item-form/store/item-form.store'
import {usePaginationStore} from 'components/common/pagination/store/pagination.stote'
import {peek} from 'utils/main/main.utils'
import {useCallback} from 'react'

const useItemTranslations = () => {
    const [transl] = useLocale(itemTranslationContent)

    const translations = useItemFormStore(useCallback((state) => {
        return state.itemValue.translations
    }, []))

    return {transl, translations}
}



export default useItemTranslations
import {useLocale} from 'hooks/other/other.hooks'
import itemTranslRuContent from 'components/admin/item-form/item-translations/item-transl-ru/item-transl-ru.content'

const useItemTranslRu = () => {
    const [transl, content] = useLocale(itemTranslRuContent)
    return {transl, content}
}

export default useItemTranslRu
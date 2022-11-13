import {useLocale} from 'hooks/other/other.hooks'
import itemTranslEngContent from 'components/admin/item-form/item-translations/item-transl-eng/item-transl-eng.content'

const useItemTranslEng = () => {
    const [transl, content] = useLocale(itemTranslEngContent)
    return {transl, content}
}

export default useItemTranslEng
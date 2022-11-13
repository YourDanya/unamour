import {useLocale} from 'hooks/other/other.hooks'
import itemTranslUaContent from 'components/admin/item-form/item-translations/item-transl-ua/item-transl-ua.content'

const useItemTranslUa = () => {
    const [transl, content] = useLocale(itemTranslUaContent)
    return {transl, content}
}

export default useItemTranslUa
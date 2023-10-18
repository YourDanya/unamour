import {dictionary} from 'app/[locale]/admin/items/_components/item-form/item-translations/item-translations.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'

const useItemTranslations = () => {
    const transl = useLocale(dictionary)

    return {transl}
}

export default useItemTranslations
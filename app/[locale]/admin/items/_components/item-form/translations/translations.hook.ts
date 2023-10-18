import {dictionary} from 'app/[locale]/admin/items/_components/item-form/translations/translations.content'
import {useLocale} from 'app/_common/hooks/helpers/locale/locale.hook'
const useTranslations = () => {
    const transl = useLocale(dictionary)

    return {transl}
}

export default useTranslations
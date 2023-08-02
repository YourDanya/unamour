import {useParams} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'
import {UseLocale} from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.types'

const useLocale: UseLocale = ((content) => {
    const locale = useParams().locale as Locale
    const {translations, common} = content
    return common? [translations[locale], common] : [translations[locale]]
}) as UseLocale

export default useLocale
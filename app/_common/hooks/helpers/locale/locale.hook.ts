import {useParams} from 'next/navigation'
import {Locale} from 'app/_common/types/types'

export const useLocale = <T extends Record<Locale, object>> (obj: T): T[Locale] => {
    const locale = useParams().locale as Locale
    return obj[locale]
}
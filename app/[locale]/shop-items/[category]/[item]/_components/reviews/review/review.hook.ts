import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useParams} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'

const useReview = () => {
    const locale = useParams().locale as Locale

    return {locale}
}

export default useReview
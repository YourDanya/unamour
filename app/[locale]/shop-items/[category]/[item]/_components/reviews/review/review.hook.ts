import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useParams} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'
import {useState} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {Review as ReviewType} from 'app/[locale]/_common/types/types'

const useReview = (props: ReviewType) => {
    const locale = useParams().locale as Locale
    const [activeUrl, setActiveUrl] = useState('')

    const onActiveUrl: MouseAction = (event) => {
        const activeUrl = event.currentTarget.getAttribute('data-value')!
        setActiveUrl(activeUrl)
    }

    const onHideModal = () => {
        setActiveUrl('')
    }

    return {main: {locale, activeUrl, setActiveUrl, onActiveUrl, onHideModal}, props}
}

export default useReview
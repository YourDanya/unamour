import {useParams} from 'next/navigation'
import {Locale} from 'app/[locale]/_common/types/types'
import {useState} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {Review as ReviewType} from 'app/[locale]/_common/types/types'
import {useUserStore} from 'app/[locale]/_store/user/user.store'
import {dictionary} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {ReviewProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.types'

const useReview = (props: ReviewProps) => {
    const transl = useLocale(dictionary)
    const locale = useParams().locale as Locale
    const [activeUrl, setActiveUrl] = useState('')
    const user = useUserStore(state => state.user)
    const isAdmin = user?.isAdmin ?? false

    const onActiveUrl: MouseAction = (event) => {
        const activeUrl = event.currentTarget.getAttribute('data-value')!
        setActiveUrl(activeUrl)
    }

    const onHideModal = () => {
        setActiveUrl('')
    }

    let isUsers = false

    if (props.user._id === user?._id) {
        isUsers = true
    }

    return {locale, activeUrl, setActiveUrl, onActiveUrl, onHideModal, props, isAdmin, transl, isUsers}
}

export default useReview
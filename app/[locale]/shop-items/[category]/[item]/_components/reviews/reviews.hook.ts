import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {Review} from 'app/[locale]/_common/types/types'
import {ReviewsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {useEffect} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {reviewsContent} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.content'
import {useUserStore} from 'app/[locale]/_store/user/user.store'
import useModalStore from 'app/[locale]/_store/modal/modal.store'
import {useState} from 'react'
import {useReviewsStore} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/_store/reviews.store'
import {GetReviews} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'

const useReviews = (props: ReviewsProps) => {
    const mainState = useGetState(props)
    const actionsState = useActions(mainState)
    const apiState = useApi(actionsState)

    return {...apiState}
}

export default useReviews

const useGetState = (props: ReviewsProps) => {
    const {color, _id} = props
    const [transl] = useLocale(reviewsContent)

    const user = useUserStore(state => state.user)
    const showModal = useModalStore(state => state.showModal)
    const setShowForm = useReviewsStore(state => state.setShowForm)
    const showForm = useReviewsStore(state => state.showForm)

    const isAdmin = useUserStore(state => state.user?.isAdmin ?? false)

    return {color, _id, transl, user, showModal, setShowForm, showForm, isAdmin, props}
}

const useActions = (state: ReturnType<typeof useGetState>) => {
    const {user, showModal, setShowForm} = state

    const onAddReview = () => {
        if (user === undefined) {
            return
        }
        if (user === null) {
            showModal('sign')
            return
        }
        setShowForm(true)
    }

    const onHideModal = () => {
        setShowForm(false)
    }

    return {...state, onAddReview, onHideModal}
}

const useApi = (state: ReturnType<typeof useActions>) => {
    const {_id, color, user} = state

    const {data, start} = useApiCall<GetReviews>(`review/${_id}/${color}`)
    const {reviews, reviewsNum, rating} = data ?? {}

    useEffect(() => {
        start()
    }, [])

    let isAdded = false

    if (reviews && user) {
        reviews.forEach(review => {
            if (review.user._id === user._id) {
                isAdded = true
            }
        })
    }

    return {...state, data, start, reviews, reviewsNum, rating, isAdded}
}

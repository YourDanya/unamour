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

const useReviews = (props: ReviewsProps) => {
    const {color, _id} = props
    const [transl] = useLocale(reviewsContent)
    const {data, start} = useApiCall<{reviews: Review[], reviewsNum: number, rating: number}>(`review/${_id}/${color}`)
    const {reviews, reviewsNum, rating} = data ?? {}

    useEffect(() => {
        start()
    }, [])

    const user = useUserStore(state => state.user)

    const showModal = useModalStore(state => state.showModal)

    const setShowForm = useReviewsStore(state => state.setShowForm)
    const showForm = useReviewsStore(state => state.showForm)

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

    const isAdmin = useUserStore(state => state.user?.isAdmin ?? false)

    console.log('data', data)

    return {
        reviews, transl, reviewsNum, rating, onAddReview, onHideModal, showModal, showForm, isAdmin
    }
}

export default useReviews
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {Review} from 'app/_common/types/review'
import {ReviewsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {useEffect} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {reviewsContent} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.content'
import {useUserStore} from 'app/_common/store/user/user.store'
import useModalStore from 'app/_common/store/modal/modal.store'
import {useState} from 'react'
import {useReviewsStore} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/_store/reviews.store'
import {GetReviews} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {useRef} from 'react'

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

    return {color, shopItemId: _id, transl, user, showModal, setShowForm, showForm, isAdmin, props}
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
    const {shopItemId, color, user} = state

    const getReviews = useApiCall<GetReviews>(`review/${shopItemId}/${color}`)
    const {reviews, reviewsNum, rating} = getReviews.data ?? {}

    useEffect(() => {
        getReviews.start()
    }, [])

    const [isAdded, setIsAdded] = useState(false)
    const flagRef = useRef(false)

    useEffect(() => {
        if (!reviews || !user || flagRef.current) {
            return
        }

        flagRef.current = true

        reviews.forEach(review => {
            if (review.user._id === user._id) {
                setIsAdded(true)
            }
        })
    }, [user, reviews])

    return {...state, getReviews, reviews, reviewsNum, rating, isAdded, setIsAdded}
}

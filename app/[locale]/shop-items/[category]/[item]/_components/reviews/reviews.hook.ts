import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {Review} from 'app/[locale]/_common/types/types'
import {ReviewsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {useEffect} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {reviewsContent} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.content'

const useReviews = (props: ReviewsProps) => {
    const {color, _id} = props
    const [transl] = useLocale(reviewsContent)
    const {data, start} = useApiCall<{reviews: Review[]}>(`reviews/${_id}/${color}`)
    const reviews = data?.reviews

    useEffect(() => {
        start()
    }, [])

    return {reviews, transl}
}

export default useReviews
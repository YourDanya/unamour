import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import useReviews from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.hook'

export type ReviewFormProps = ReturnType<typeof useReviews>

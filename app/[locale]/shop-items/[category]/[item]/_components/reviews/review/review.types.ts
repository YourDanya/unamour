import {Review} from 'app/_common/types/review'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'

export type ReviewProps = Review & {
    getReviews: ReturnType<typeof useApiCall>,

}
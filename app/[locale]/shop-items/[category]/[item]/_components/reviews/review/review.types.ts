import {Review} from 'app/[locale]/_common/types/types'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'

export type ReviewProps = Review & {
    getReviews: ReturnType<typeof useApiCall>,

}
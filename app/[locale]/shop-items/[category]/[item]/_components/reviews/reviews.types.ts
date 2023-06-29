import {Review} from 'app/[locale]/_common/types/types'

export type ReviewsProps = {
    color: string,
    _id: string
}

export type GetReviews = {
    reviews: Review[], reviewsNum: number, rating: number
}
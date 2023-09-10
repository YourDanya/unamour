import {Review} from 'app/_common/types/review'

export type ReviewsProps = {
    color: string,
    _id: string
}

export type GetReviews = {
    reviews: Review[], reviewsNum: number, rating: number
}
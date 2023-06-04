import {ReviewsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {FC} from 'react'
import useReviews from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.hook'
import Review from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.component'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'

const ReviewsComponent: FC<ReviewsProps> = (props) => {
    const {reviews, transl} = useReviews(props)

    return (
        <div className={'reviews'}>
            <div className={'reviews__title'}>
                {transl.title}
            </div>
            {reviews ? (
                <div className={'reviews__items'}>
                    {reviews.map(review => (
                        <Review key={review.title} {...review}/>
                    ))}
                </div>
            ) : (
                <Spinner className={'reviews__spinner'}/>
            )}
        </div>
    )
}

export default ReviewsComponent
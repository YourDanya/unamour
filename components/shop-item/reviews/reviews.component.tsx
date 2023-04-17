import styles from 'components/shop-item/reviews/reviews.module.sass'
import useReviews from 'components/shop-item/reviews/reviews.hook'
import {FC} from 'react'
import {ReviewsProps} from 'components/shop-item/reviews/reviews.types'
import Spinner from 'components/common/spinner/spinner.component'
import Review from 'components/shop-item/reviews/review/review.component'

const Reviews: FC<ReviewsProps> = (props) => {
    const {reviews} = useReviews(props)

    return (
        <div className={styles.reviews}>
            {reviews && reviews.length > 0 ? (
                <>
                    {reviews.map((review, index) => (
                        <Review key={index} {...review}/>
                    ))}
                </>
            ) : reviews ? (
                <></>
            ) : (
                <Spinner/>
            )}
        </div>
    )
}

export default Reviews
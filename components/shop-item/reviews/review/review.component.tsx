import {FC} from 'react'
import styles from 'components/shop-item/reviews/review/review.module.sass'
import {baseURL} from 'utils/api/api.utils'
import {ReviewProps} from 'components/shop-item/reviews/review/review.types'
import ReviewStar from 'components/shop-item/reviews/review-star/review-star.component'

const Review: FC<ReviewProps> = (props) => {
    const {images, comment, stars} = props

    return (
        <div className={styles.review}>
            <div className={styles.review__stars}>
                {Array.from({length: 5}, (_, index) => index).map(elem => (
                    <ReviewStar key={elem} star={Math.min(Math.max(stars - elem, 0), 1)}/>
                ))}
            </div>
            <div className={styles.review__comment}>
                {comment}
            </div>
            <div className={styles.review__images}>
                {images.map(urlId => (
                    <img
                        key={urlId}
                        className={styles.review__image}
                        src={`${baseURL}/images/${urlId}`}
                        alt={`comment image ${urlId}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Review
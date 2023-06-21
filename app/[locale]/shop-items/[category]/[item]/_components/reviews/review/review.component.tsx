import {Review as ReviewType} from 'app/[locale]/_common/types/types'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'
import {getStarsArr} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.utils'
import reviewDate from 'app/[locale]/_common/utils/helpers/review-date/review-date.util'
import useReview from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.hook'

const Review = (props: ReviewType) => {
    const {title, review, status, rating, user, date} = props
    const {locale} = useReview()

    return (
        <div className={'review'}>
            <div className={'review__top'}>
                <div className={'review__rating'}>
                    {getStarsArr(rating).map(elem => (
                        <Star key={elem} rating={elem}/>
                    ))}
                </div>
                <div className={'review__info'}>
                    {user.name} - {reviewDate({date, locale})}
                </div>
            </div>
            <div className={'review__title'}>
                {title}
            </div>
            <div className={'review__text'}>
                {review}
            </div>
        </div>
    )
}

export default Review
import {Review as ReviewType} from 'app/[locale]/_common/types/types'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'

const Review = (props: ReviewType) => {
    const {title, description, status, rating} = props

    return (
        <div className={'review'}>
            <div className={'review__rating'}>
                {Array.from({length: 5}, (_, index) => index)
                    .map(elem => (
                        <Star rating={Math.max(Math.min(rating - elem, 1), 0)}/>
                    ))
                }
            </div>
            <div className={'review__title'}>
                {title}
            </div>
            <div className={'review__description'}>
                {description}
            </div>
        </div>
    )
}

export default Review
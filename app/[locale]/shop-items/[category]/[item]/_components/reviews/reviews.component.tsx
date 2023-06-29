import {ReviewsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {FC} from 'react'
import useReviews from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.hook'
import Review from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.component'
import {getStarsArr} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.utils'
import Button from 'app/[locale]/_common/components/button/button.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import ReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.component'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import {Review as ReviewType} from 'app/[locale]/_common/types/types'
import {useReviewsStore} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/_store/reviews.store'

const Reviews: FC<ReviewsProps> = (props) => {
    const {color, _id} = props
    const state = useReviews(props)
    const {reviews, user} = state

    return (
        <div className={'reviews'}>
            {reviews && user !== undefined ? (
                <ReviewsMain {...state} reviews={reviews}/>
            ) : (
                <Spinner className={'reviews__spinner'}/>
            )}
        </div>
    )
}

export default Reviews

const ReviewsMain = (state: ReturnType<typeof useReviews> & {reviews: ReviewType[]}) => {
    const {isAdded, reviews, showForm, onHideModal, color, _id, transl} = state

    return (
        <>
            <ReviewsTop {...state}/>
            <ReviewsItems reviews={reviews}/>
            {!isAdded ? (
                <ModalContent
                    className={`reviews__modal`}
                    active={showForm}
                    hideModal={onHideModal}
                >
                    <ReviewForm
                        color={color}
                        shopItemId={_id}
                    />
                </ModalContent>
            ) : (
                <ModalContent
                    className={'reviews__modal reviews__added'}
                    active={showForm}
                    hideModal={onHideModal}
                >
                    {transl.added}
                </ModalContent>
            )}
            <Modal active={showForm} hideModal={onHideModal}/>
        </>
    )
}

const ReviewsTop = (props: ReturnType<typeof useReviews>) => {
    const {transl, rating, reviews, onAddReview} = props

    return (
        <div className={'reviews__top'}>
            <div className={'reviews__title'}>
                {transl.title} ({reviews?.length ?? 0})
            </div>
            {rating && (
                <div className={'reviews__rating'}>
                    <div className={'reviews__rating-num'}>
                        {rating}
                    </div>
                    <div className={'reviews__stars'}>
                        {getStarsArr(rating).map((elem, index) => (
                            <Star rating={elem} key={index}/>
                        ))}
                    </div>
                </div>
            )}
            <Button className={'reviews__leave'} onClick={onAddReview}>
                {transl.leave}
            </Button>
        </div>
    )
}

const ReviewsItems = (props: { reviews: ReviewType[] }) => {
    const {reviews} = props

    return (
        <div className={'reviews__items'}>
            {reviews.map(review => (
                <Review key={review.title} {...review}/>
            ))}
        </div>
    )
}


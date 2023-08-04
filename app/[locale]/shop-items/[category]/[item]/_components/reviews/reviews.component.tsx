import {ReviewsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {FC} from 'react'
import useReviews from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.hook'
import Review from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.component'
import {getStarsArr} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.utils'
import Button from 'app/_common/components/button/button.component'
import Modal from 'app/_common/components/modal/modal.component'
import ModalContent from 'app/_common/components/modal-content/modal-content.component'
import ReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.component'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'
import Spinner from 'app/_common/components/spinner/spinner.component'
import {Review as ReviewType} from 'app/_common/types/types'
import {useReviewsStore} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/_store/reviews.store'
import useReview from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.hook'

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

const ReviewsMain = (state: ReturnType<typeof useReviews> & { reviews: ReviewType[] }) => {
    const {isAdded, reviews, showForm, onHideModal, color, transl, getReviews} = state

    return (
        <>
            <ReviewsTop {...state}/>
            <ReviewsItems {...state}/>
            {!isAdded ? (
                <ModalContent
                    className={`reviews__modal`}
                    active={showForm}
                    hideModal={onHideModal}
                >
                    <ReviewForm
                        {...state}
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

const ReviewsItems = (props: ReturnType<typeof useReviews> & { reviews: ReviewType[] }) => {
    const {reviews, getReviews} = props

    return (
        <div className={'reviews__items'}>
            {reviews.map(review => (
                <Review
                    key={review.title}
                    {...review}
                    getReviews={getReviews}
                />
            ))}
        </div>
    )
}


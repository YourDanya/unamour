import {ReviewsProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.types'
import {FC} from 'react'
import useReviews from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.hook'
import Review from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.component'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import {getStarsArr} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.utils'
import Button from 'app/[locale]/_common/components/button/button.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import ReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.component'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'

const Reviews: FC<ReviewsProps> = (props) => {
    const {color, _id} = props
    const {
        reviews, transl, reviewsNum, rating, onAddReview, onHideModal, showModal, showForm, isAdmin,
    } = useReviews(props)

    return (
        <div className={'reviews'}>
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
                            {getStarsArr(rating).map(elem => (
                                <Star rating={elem}/>
                            ))}
                        </div>
                    </div>
                )}
                <Button className={'reviews__leave'} onClick={onAddReview}>
                    {transl.leave}
                </Button>
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
            <ModalContent
                className={`reviews__modal`}
                active={showForm}
                hideModal={onHideModal}
            >
                <ReviewForm color={color} shopItemId={_id}/>
            </ModalContent>
            <Modal active={showForm} hideModal={onHideModal}/>
        </div>
    )
}

export default Reviews
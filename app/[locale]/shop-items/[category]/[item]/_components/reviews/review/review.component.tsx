import {Review as ReviewType} from 'app/[locale]/_common/types/types'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'
import {getStarsArr} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.utils'
import reviewDate from 'app/[locale]/_common/utils/helpers/review-date/review-date.util'
import useReview from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import Modal from 'app/[locale]/_common/components/modal/modal.component'
import ModalContent from 'app/[locale]/_common/components/modal-content/modal-content.component'
import {useEffect} from 'react'
import {useState} from 'react'
import useResize from 'app/[locale]/_common/hooks/component/component.hooks'
import {useRef} from 'react'
import ImageModal
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/image-modal/image-modal.component'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Spinner from 'app/[locale]/_common/components/spinner/spinner.component'
import {ReviewProps} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review/review.types'

const Review = (props: ReviewProps) => {
    const {title, review, status, rating, user, date, images} = props
    const state = useReview(props)
    const {
        locale, activeUrl, setActiveUrl, onActiveUrl, onHideModal, isAdmin, transl
    } = state

    return (
        <div className={'review'}>
            <div className={'review__top'}>
                <div className={'review__rating'}>
                    {getStarsArr(rating).map((elem, index) => (
                        <Star key={index} rating={elem}/>
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
            <Images {...state}/>
            <Status {...state}/>
            <ImageModal {...state}/>
            <Modal active={!!activeUrl} hideModal={onHideModal}/>
            {isAdmin && (
                <Admin {...state}/>
            )}
        </div>
    )
}

export default Review

const Images = (props: ReturnType<typeof useReview>) => {
    const {props: {images}, onActiveUrl} = props

    return (
        <div className={'review-images images'}>
            {images.map((image => (
                <Button onClick={onActiveUrl} data-value={image.url} key={image.url}>
                    <img
                        className={'images__preview'}
                        src={image.url}
                        alt={'review image'}
                    />
                </Button>
            )))}
        </div>
    )
}

const Status = (props: ReturnType<typeof useReview>) => {
    const {isAdmin, transl, isUsers, props: {status}} = props

    return (
        <>
            {(isAdmin || isUsers) && (
                <div className={'review-status status'}>
                    <div className={'status__label'}>
                        {transl.status}:
                    </div>
                    <div className={'status__value'}>
                        {transl.statusValue[status]}
                    </div>
                </div>
            )}
        </>
    )
}

const useAdmin = (state: ReturnType<typeof useReview>) => {
    const {isAdmin, props: {_id, getReviews}, transl} = state

    const deleteReview = useApiCall(`review/${_id}`, {
        method: 'DELETE',
        onSuccess: () => {
            getReviews.start()
        }
    })

    const acceptReview = useApiCall(`review/accept/${_id}`, {
        method: 'POST',
        onSuccess: () => {
            getReviews.start()
        }
    })

    const mappedDeleteReview = useMapApiRes({
        res: deleteReview, successTransl: transl.deleteReview.success
    })

    const mappedAcceptReview = useMapApiRes({
        res: acceptReview, successTransl: transl.acceptReview.success
    })

    const onDeleteReview = () => {
        deleteReview.start()
    }

    const onAcceptReview = () => {
        acceptReview.start()
    }

    return {mappedDeleteReview, mappedAcceptReview, onDeleteReview, onAcceptReview}
}

const Admin = (state: ReturnType<typeof useReview>) => {
    const {props: {status}, transl} = state

    const {
        mappedDeleteReview, mappedAcceptReview, onDeleteReview, onAcceptReview
    } = useAdmin(state)

    return (
        <div className={'review-admin admin'}>
            <Button
                className={'admin__button admin__button--delete'}
                onClick={onDeleteReview}
                loading={mappedDeleteReview.loading}
            >
                {transl.delete}
            </Button>
            {status !== 'accepted' && (
                <Button
                    className={'admin__button'}
                    onClick={onAcceptReview}
                    loading={mappedAcceptReview.loading}
                >
                    {transl.accept}
                </Button>
            )}
            <FormMessage
                className={'admin__message'}
                error={mappedDeleteReview.error}
            />
            <FormMessage
                className={'admin__message'}
                error={mappedAcceptReview.error}
            />
        </div>
    )
}
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

const Review = (props: ReviewType) => {
    const {title, review, status, rating, user, date, images} = props
    const state = useReview(props)
    const {main: {locale, activeUrl, setActiveUrl, onActiveUrl, onHideModal}} = state

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
            <Images {...state}/>
            <ImageModal {...state}/>
            <Modal active={!!activeUrl} hideModal={onHideModal}/>
        </div>
    )
}

export default Review

const Images = (props: ReturnType<typeof useReview>) => {
    const {props: {images}, main: {onActiveUrl}} = props

    return (
        <div className={'review-images images'}>
            {images.map((image => (
                <Button onClick={onActiveUrl} data-value={image.url}>
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


import {getStarsArr} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.utils'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'
import Input from 'app/_common/components/input-v2/input.component'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import Photos from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.component'
import Button from 'app/_common/components/button/button.component'
import Photo from 'app/_common/svg/photo/photo.component'
import useReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.hook'
import {FC} from 'react'

const Main: FC<ReturnType<typeof useReviewForm>> = (props) => {

    const {
        main: {transl, values, onChange, photos, rating, errors, onBlur},
        global: {onAddPhoto, onRating},
        admin: {isAdmin}
    } = props

    return (
        <div className={'review-form-block form review-form-main main'}>
            {!isAdmin && (
                <div className={'form__subtitle'}>
                    {transl.subtitle}
                </div>
            )}
            <div className={'form__label form__label--required'}>
                {transl.rating}
            </div>
            <div className={'main__rating-stars'}>
                {getStarsArr(rating).map((elem, index) => (
                    <Star
                        key={index}
                        className={'main__star'}
                        rating={elem}
                        data-value={index + 1}
                        onClick={onRating}
                        onMouseEnter={onRating}
                    />
                ))}
            </div>
            <label className={'form__label form__label--required'} htmlFor={'title'}>
                {transl.inputs.title.label}
            </label>
            <Input
                className={'form__input'}
                name={'title'}
                value={values.title}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.title}
            />
            <Description className={'form__descr'}>
                {transl.inputs.title.descr}
            </Description>
            <label className={'form__label form__label--required'} htmlFor={'review'}>
                {transl.inputs.review.label}
            </label>
            <Input
                className={'form__input form__textarea'}
                type={'textarea'}
                name={'review'}
                value={values.review}
                onBlur={onBlur}
                error={errors.review}
                onChange={onChange}
            />
            <Description className={'form__descr'}>
                {transl.inputs.review.descr}
            </Description>
            <div className={'form__label'}>
                {transl.inputs.photos.label}
            </div>
            <Photos
                {...props}
            />
            <Button className={'main__photo-btn'} onClick={onAddPhoto}>
                <Photo className={'main__photo-icon'}/>
                {transl.addPhoto}
            </Button>
            <Description className={`${photos.length !== 0 ? 'main__photo-descr' : 'main__descr'}`}>
                {transl.inputs.photos.descr}
            </Description>
        </div>
    )
}

export default Main
import Input from 'app/[locale]/_common/components/input-v2/input.component'
import useReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.hook'
import {getStarsArr} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/reviews.utils'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'
import IIcon from 'app/[locale]/_common/svg/i-icon/i-icon.component'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import Images from 'app/[locale]/shop-items/[category]/[item]/_components/images/images.component'
import Photo from 'app/[locale]/_common/svg/photo/photo.component'
import Photos from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.component'

const ReviewForm = () => {

    const {
        errors, values, onChange, transl, onRating, onSubmit, onAddPhoto, rating, inputRef, setPhotos
    } = useReviewForm()

    return (
        <form className={'review-form form'}>
            <div className={'form__title'}>
                {transl.title}
            </div>
            <div className={'form__subtitle'}>
                {transl.subtitle}
            </div>
            <div className={'form__label form__label--required'}>
                {transl.rating}
            </div>
            <div className={'form__rating-stars'}>
                {getStarsArr(5).map(elem => (
                    <Star
                        className={'form__star'}
                        rating={elem}
                        onClick={onRating}
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
            />
            <Description>
                {transl.inputs.title.descr}
            </Description>
            <label className={'form__label form__label--required'} htmlFor={'review'}>
                {transl.inputs.review.label}
            </label>
            <Input
                className={'form__input'}
                type={'textarea'}
                name={'review'}
                value={values.review}
                onChange={onChange}
            />
            <Description>
                {transl.inputs.review.descr}
            </Description>
            <div className={'form__label'}>
                {transl.inputs.photos.label}
            </div>
            <Button className={'form__photo-btn'} onClick={onAddPhoto}>
                <Photo className={'form__photo-icon'}/>
                {transl.addPhoto}
            </Button>
            <Description>
                {transl.inputs.photos.descr}
            </Description>
            <Photos
                inputRef={inputRef} setPhotos={setPhotos}
            />
            <Button
                className={'form__submit'}
                onClick={onSubmit}
            >
                {transl.submit}
            </Button>
        </form>
    )
}

export default ReviewForm

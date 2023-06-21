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
import Main from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/main/main.component'
import GetUsers
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/get-users/get-users.component'
import CreateUser
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.component'
import AttachUser
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/attach-user/attach-user.component'
import {FC} from 'react'
import {
    ReviewFormProps
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.types'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'

const ReviewForm: FC<ReviewFormProps> = (props) => {
    const state = useReviewForm(props)
    const {
        main: {transl},
        admin: {isAdmin},
        global: {onSubmit},
        api: {mappedCreateReview}
    } = state

    return (
        <form className={'review-form form'}>
            <div className={'form__title'}>
                {transl.title}
            </div>
            {isAdmin && (
                <>
                    <GetUsers/>
                    <CreateUser/>
                    <AttachUser {...state}/>
                </>
            )}
            <Main {...state}/>
            <Button
                className={'form__button'}
                onClick={onSubmit}
                loading={mappedCreateReview.loading}
            >
                {transl.submit}
            </Button>
            <FormMessage
                className={'form__message'}
                success={mappedCreateReview.success}
                error={mappedCreateReview.error}
            />
        </form>
    )
}

export default ReviewForm

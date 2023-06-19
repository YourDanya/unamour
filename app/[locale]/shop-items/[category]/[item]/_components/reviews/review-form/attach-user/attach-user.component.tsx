import useAttachUser
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/attach-user/attach-user.hook'
import useReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.hook'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import Input from 'app/[locale]/_common/components/input-v2/input.component'

const AttachUser = (props: ReturnType<typeof useReviewForm>) => {
    const {onAdminChange, adminValues, transl} = props

    return (
        <div className={'review-form-block form attach-user'}>
            <label className={'form__label'}>
                {transl.inputs.email.label}
            </label>
            <Input
                className={'form__input'}
                name={'email'}
                value={adminValues.email}
                onChange={onAdminChange}
            />
            <Description className={'attach-user__descr'}>
                {transl.inputs.email.descr}
            </Description>
        </div>
    )
}

export default AttachUser
import useAttachUser
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/attach-user/attach-user.hook'
import useReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.hook'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import Input from 'app/_common/components/input-v2/input.component'

const AttachUser = (props: ReturnType<typeof useReviewForm>) => {
    const {admin: { onAdminChange, adminValues, adminErrors, onAdminBlur}, main: {transl}} = props

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
                onBlur={onAdminBlur}
                error={adminErrors.email}
            />
            <Description className={'attach-user__descr'}>
                {transl.inputs.email.descr}
            </Description>
        </div>
    )
}

export default AttachUser
import useCreateUser
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.hook'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input-v2/input.component'

const CreateUser = () => {
    const {
        onCreateUser, transl, mappedCreateUser, createUser, onChange, errors, values, onBlur
    } = useCreateUser()

    return (
        <div className={'review-form-block form review-form-create-user create-user'}>
            <div className={'form__subtitle'}>
                {transl.createUser}
            </div>
            <label className={'form__label form__label--required'} htmlFor={'name'}>
                {transl.inputs.name.label}
            </label>
            <Input
                className={'form__input'}
                onChange={onChange}
                value={values.name}
                error={errors.name}
                onBlur={onBlur}
                name={'name'}
            />
            <label className={'form__label form__label--required'} htmlFor={'email'}>
                {transl.inputs.email.label}
            </label>
            <Input
                className={'form__input'}
                onChange={onChange}
                value={values.email}
                error={errors.email}
                onBlur={onBlur}
                name={'email'}
            />
            <label className={'form__label form__label--required'} htmlFor={'password'}>
                {transl.inputs.password.label}
            </label>
            <Input
                className={'form__input'}
                onChange={onChange}
                value={values.password}
                error={errors.password}
                onBlur={onBlur}
                name={'password'}
                type={'password'}
            />
            <label className={'form__label form__label--required'} htmlFor={'passwordConfirm'}>
                {transl.inputs.passwordConfirm.label}
            </label>
            <Input
                className={'form__input create-user__input--last'}
                onChange={onChange}
                value={values.passwordConfirm}
                error={errors.passwordConfirm}
                onBlur={onBlur}
                name={'passwordConfirm'}
                type={'password'}
            />
            <Description className={'form__descr'}>
                {transl.descr}
            </Description>
            <Button onClick={onCreateUser} className={'form__button'}>
                {transl.createUser}
            </Button>
            <FormMessage
                className={'form__message'}
                success={mappedCreateUser.success}
                error={mappedCreateUser.error}
            />
        </div>
    )
}

export default CreateUser
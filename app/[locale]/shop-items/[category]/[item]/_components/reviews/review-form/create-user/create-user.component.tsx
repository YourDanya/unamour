import useCreateUser
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/create-user/create-user.hook'
import Description
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/description/description.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input-v2/input.component'

const CreateUser = () => {
    const {
        onCreateUser, transl, mappedCreateUser, createUser, onChange, errors, values
    } = useCreateUser()

    return (
        <div className={'review-form-block review-form-create-user form'}>
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
                name={'password'}
                type={'password'}
            />
            <label className={'form__label form__label--required'} htmlFor={'passwordConfirm'}>
                {transl.inputs.passwordConfirm.label}
            </label>
            <Input
                className={'form__input'}
                onChange={onChange}
                value={values.passwordConfirm}
                error={errors.passwordConfirm}
                name={'passwordConfirm'}
                type={'password'}
            />
            <FormMessage
                success={mappedCreateUser.success}
                error={mappedCreateUser.error}
            />
            <Description className={'form__descr'}>
                {transl.descr}
            </Description>
            <Button onClick={onCreateUser} className={'form__button'}>
                {transl.createUser}
            </Button>
        </div>
    )
}

export default CreateUser
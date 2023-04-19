'use client'

import {FC} from 'react'
import Button from 'app/[locale]/_common/components/button/button.component'
import useRegisterForm from 'app/[locale]/_components/layout/nav/nav-auth/register/register-form/register-form.hook'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input/input.component'
import {RegisterFormProps} from 'app/[locale]/_components/layout/nav/nav-auth/register/register-form/register-form.types'

const RegisterForm: FC<RegisterFormProps> = (props) => {
    const {register} = props
    const {transl, inputs, onChange, onValidate, handleSubmit} = useRegisterForm()

    return (
        <form className={'nav-auth__form'}>
            <Input
                className={'nav-auth__input'}
                name={'name'}
                placeholder={transl.inputs.name}
                value={inputs.values.name}
                onChange={onChange}
                error={inputs.errors.name}
                onValidate={onValidate}
            />
            <Input
                className={'nav-auth__input'}
                name={'email'}
                placeholder={transl.inputs.email}
                value={inputs.values.email}
                onChange={onChange}
                error={inputs.errors.email}
                onValidate={onValidate}
            />
            <Input
                className={'nav-auth__input'}
                name={'password'}
                placeholder={transl.inputs.password}
                value={inputs.values.password}
                onChange={onChange}
                error={inputs.errors.password}
                onValidate={onValidate}
                type={'password'}
            />
            <Input
                className={'nav-auth__input'}
                name={'passwordConfirm'}
                placeholder={transl.inputs.passwordConfirm}
                value={inputs.values.passwordConfirm}
                onChange={onChange}
                error={inputs.errors.passwordConfirm}
                onValidate={onValidate}
                validateDeps={[inputs.values.password]}
                type={'password'}
            />
            <div className="nav-auth__bottom">
                <Button className="nav-auth__button nav-auth__button--up" onClick={handleSubmit} loading={register.loading}>
                    {transl.signUp}
                </Button>
                <FormMessage success={register.success} error={register.error}/>
                <div className={'nav-auth__consent'}>
                    {transl.consent}
                </div>
            </div>
        </form>
    )
}

export default RegisterForm
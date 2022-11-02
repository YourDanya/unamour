import {FC} from 'react'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import React from 'react'
import useRegisterForm from 'components/nav-auth/register/register-form/register-form.hook'
import {RegisterProps} from 'components/nav-auth/register/register-form/register-form.types'

const RegisterForm: FC<RegisterProps> = (props) => {
    const {register} = props
    const {transl, inputs, handleChange, handleValidate, handleSubmit} = useRegisterForm()

    return (
        <form className={'nav-auth__form'}>
            <Input
                className={'nav-auth__input'}
                name={'name'}
                placeholder={transl.inputs.name}
                value={inputs.values.name}
                handleChange={handleChange}
                error={inputs.errors.name}
                handleValidate={handleValidate}
            />
            <Input
                className={'nav-auth__input'}
                name={'email'}
                placeholder={transl.inputs.email}
                value={inputs.values.email}
                handleChange={handleChange}
                error={inputs.errors.email}
                handleValidate={handleValidate}
            />
            <Input
                className={'nav-auth__input'}
                name={'password'}
                placeholder={transl.inputs.password}
                value={inputs.values.password}
                handleChange={handleChange}
                error={inputs.errors.password}
                handleValidate={handleValidate}
                type={'password'}
            />
            <Input
                className={'nav-auth__input'}
                name={'passwordConfirm'}
                placeholder={transl.inputs.passwordConfirm}
                value={inputs.values.passwordConfirm}
                handleChange={handleChange}
                error={inputs.errors.passwordConfirm}
                handleValidate={handleValidate}
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
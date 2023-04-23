'use client'

import {NextPage} from 'next'
import NavLink from 'app/[locale]/_common/components/nav-link/nav-link.component'
import useLogin from 'app/[locale]/auth/login/_components/login.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input/input.component'
import 'app/[locale]/auth/auth.styles.sass'

const Login: NextPage = () => {
    const {transl, inputs, onChange, onValidate, onSubmit, mappedLogin} = useLogin()

    return (
        <div className={'auth'}>
            <form className={'auth__form'}>
                <div className={'auth__title'}>{transl.signIn}</div>
                <Input
                    className={'auth__input'}
                    name={'passwordConfirm'}
                    placeholder={transl.inputs.email}
                    value={inputs.values.email}
                    onChange={onChange}
                    error={inputs.errors.email}
                    onValidate={onValidate}
                />
                <Input
                    className={'auth__input'}
                    name={'password'}
                    placeholder={transl.inputs.password}
                    value={inputs.values.password}
                    onChange={onChange}
                    error={inputs.errors.password}
                    onValidate={onValidate}
                    type={'password'}
                />
                <Button className='auth__button' onClick={onSubmit} loading={mappedLogin.loading}>
                    {transl.signIn}
                </Button>
                <NavLink className='auth__button' href={'auth/forget-password'}>
                    {transl.forget}
                </NavLink>
                <FormMessage error={mappedLogin.error} success={mappedLogin.success}/>
            </form>
        </div>
    )
}

export default Login
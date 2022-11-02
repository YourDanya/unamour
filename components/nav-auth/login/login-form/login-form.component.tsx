import {FC, MouseEvent} from 'react'
import useLoginForm from 'components/nav-auth/login/login-form/login-form.hook'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import Input from 'components/common/input/input.component'
import React from 'react'
import {LoginProps} from 'components/nav-auth/login/login-form/login-form.types'


const LoginForm: FC<LoginProps> = (props) => {
    const {handleResetPass} = props
    const {transl, inputs, handleChange, handleClick, handleValidate, login} = useLoginForm()

    return (
        <>
            <form className={'nav-auth__reset'}>
                <Input
                    placeholder={transl.inputs.email}
                    className={'nav-auth__input'}
                    name={'email'}
                    value={inputs.values.email}
                    error={inputs.errors.email}
                    handleChange={handleChange}
                    handleValidate={handleValidate}
                />
                <Input
                    type={'password'}
                    placeholder={transl.inputs.password}
                    className={'nav-auth__input'}
                    name={'password'}
                    value={inputs.values.password}
                    error={inputs.errors.password}
                    handleChange={handleChange}
                    handleValidate={handleValidate}
                />
                <div className="nav-auth__bottom">
                    <Button className="nav-auth__button" onClick={handleClick} loading={login.loading}>
                        {transl.signIn}
                    </Button>
                    <Button className="nav-auth__forget" onClick={handleResetPass}>
                        {transl.forget}
                    </Button>
                    <FormMessage success={login.success} error={login.error}/>
                    <div className='nav-auth__consent'>
                        {transl.consent}
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm
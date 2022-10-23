import {FC, MouseEvent} from 'react'
import useLogin from 'components/sign-in-up/sign-in/login/login.hook'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import Input from 'components/common/input/input.component'
import React from 'react'

type LoginProps = {
    handleResetPass: (event: MouseEvent<HTMLElement>) => void
}

const Login: FC<LoginProps> = (props) => {

    const {handleResetPass} = props
    const {transl, inputs, handleChange, handleClick, handleValidate, login} = useLogin()

    return (
        <>
            <form className={'sign__reset'}>
                <Input
                    placeholder={transl.inputs.email}
                    className={'sign__input'}
                    name={'email'}
                    value={inputs.values.email}
                    error={inputs.errors.email}
                    handleChange={handleChange}
                    handleValidate={handleValidate}
                />
                <Input
                    type={'password'}
                    placeholder={transl.inputs.password}
                    className={'sign__input'}
                    name={'password'}
                    value={inputs.values.password}
                    error={inputs.errors.password}
                    handleChange={handleChange}
                    handleValidate={handleValidate}
                />
                <div className="sign__bottom">
                    <Button className="sign__button" onClick={handleClick} loading={login.loading}>
                        {transl.signIn}
                    </Button>
                    <Button className="sign__forget" onClick={handleResetPass}>
                        {transl.forget}
                    </Button>
                    <FormMessage success={login.success} error={login.error}/>
                    <div className='sign__consent'>
                        {transl.consent}
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login
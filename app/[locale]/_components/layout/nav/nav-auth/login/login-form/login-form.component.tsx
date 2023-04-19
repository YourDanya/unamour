import {FC} from 'react'
import {LoginProps} from 'app/[locale]/_components/layout/nav/nav-auth/login/login-form/login-form.types'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import useLoginForm from 'app/[locale]/_components/layout/nav/nav-auth/login/login-form/login-form.hook'
import Input from 'app/[locale]/_common/components/input/input.component'

const LoginForm: FC<LoginProps> = (props) => {
    const {handleResetPass} = props
    const {transl, inputs, onChange, onLogin, onValidate, login, mappedLogin} = useLoginForm()

    return (
        <form className={'nav-auth__reset'}>
            <Input
                placeholder={transl.inputs.email}
                className={'nav-auth__input'}
                name={'email'}
                value={inputs.values.email}
                error={inputs.errors.email}
                onChange={onChange}
                onValidate={onValidate}
            />
            <Input
                type={'password'}
                placeholder={transl.inputs.password}
                className={'nav-auth__input'}
                name={'password'}
                value={inputs.values.password}
                error={inputs.errors.password}
                onChange={onChange}
                onValidate={onValidate}
            />
            <div className="nav-auth__bottom">
                <Button className="nav-auth__button" onClick={onLogin} loading={login.loading}>
                    {transl.signIn}
                </Button>
                <Button className="nav-auth__forget" onClick={handleResetPass}>
                    {transl.forget}
                </Button>
                <FormMessage
                    success={mappedLogin.success}
                    error={mappedLogin.error}
                />
                <div className="nav-auth__consent">
                    {transl.consent}
                </div>
            </div>
        </form>
    )
}

export default LoginForm
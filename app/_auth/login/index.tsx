import {NextPage} from 'next'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import useSignIn from 'pages/auth/login/login.hook'
import NavLink from 'components/common/nav-link/nav-link.component'

const SignIn: NextPage = () => {

    const {transl, login, inputs, onChange, onValidate, handleSubmit} = useSignIn()

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
                <Button className='auth__button' onClick={handleSubmit} loading={login.loading}>
                    {transl.signIn}
                </Button>
                <NavLink className='auth__button' href={'auth/forget-password'}>
                    {transl.forget}
                </NavLink>
                <FormMessage error={login.error} success={login.success}/>
            </form>
        </div>
    )
}

export default SignIn
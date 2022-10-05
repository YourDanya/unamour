import {NextPage} from 'next'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import useSignIn from 'pages/auth/sign-in/sign-in.hook'
import NavLink from 'components/common/nav-link/nav-link.component'

const SignIn: NextPage = () => {

    const {transl, error, success, loading, inputs, handleChange, handleValidate, handleSubmit} = useSignIn()

    return (
        <div className={'auth'}>
            <form className={'auth__form'}>
                <div className={'auth__title'}>{transl.signIn}</div>
                <Input
                    className={'auth__input'}
                    name={'passwordConfirm'}
                    placeholder={transl.inputs.email}
                    value={inputs.values.email}
                    handleChange={handleChange}
                    error={inputs.errors.email}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'auth__input'}
                    name={'password'}
                    placeholder={transl.inputs.password}
                    value={inputs.values.password}
                    handleChange={handleChange}
                    error={inputs.errors.password}
                    handleValidate={handleValidate}
                    type={'password'}
                />
                <Button className='auth__button' onClick={handleSubmit} loading={loading}>
                    {transl.signIn}
                </Button>
                <NavLink className='auth__button' href={'auth/forget-password'}>
                    {transl.forget}
                </NavLink>
                <FormMessage error={error} success={success}/>
            </form>
        </div>
    )
}

export default SignIn
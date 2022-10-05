import Button from 'components/common/button/button.component'
import {NextPage} from 'next'
import FormMessage from 'components/common/form-message/form-message.component'
import useResetPass from 'pages/auth/reset-password/reset-password.hook'
import Input from 'components/common/input/input.component'

const ResetPass: NextPage = () => {
    const {transl, resetPass, inputs, handleChange, handleValidate, handleSubmit} = useResetPass()

    return (
        <div className={'auth'}>
            <form className={'auth__form'}>
                <div className={'auth__title'}>{transl.title}</div>
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
                <Input
                    className={'auth__input'}
                    name={'passwordConfirm'}
                    placeholder={transl.inputs.passwordConfirm}
                    value={inputs.values.passwordConfirm}
                    handleChange={handleChange}
                    error={inputs.errors.passwordConfirm}
                    handleValidate={handleValidate}
                    type={'password'}
                />
                <Button className='auth__button' onClick={handleSubmit} loading={resetPass.loading}>
                    {transl.save}
                </Button>
                <FormMessage error={resetPass.error} success={resetPass.success}/>
            </form>
        </div>
    );
}

export default ResetPass
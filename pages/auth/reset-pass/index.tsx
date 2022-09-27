import Button from 'components/common/button/button.component'
import {NextPage} from 'next'
import FormMessage from 'components/common/form-message/form-message.component'
import useResetPass from 'pages/auth/reset-pass/reset-pass.hook'
import Input from 'components/common/input/input.component'

const ResetPass: NextPage = () => {

    const {transl, content, error, success, loading, inputs, handleChange, handleValidate, handleSubmit} = useResetPass()

    return (
        <div className={'reset-pass'}>
            <form className={'reset-pass__form'}>
                <div className={'reset-pass__title'}>{transl.title}</div>
                <Input
                    className={'reset-pass__input'}
                    name={'pass'}
                    placeholder={transl.inputs.pass}
                    value={inputs.values.pass}
                    handleChange={handleChange}
                    error={inputs.errors.pass}
                    handleValidate={handleValidate}
                />
                <Input
                    className={'reset-pass__input'}
                    name={'passConfirm'}
                    placeholder={transl.inputs.passConfirm}
                    value={inputs.values.passConfirm}
                    handleChange={handleChange}
                    error={inputs.errors.passConfirm}
                    handleValidate={handleValidate}
                />
                <Button onClick={handleSubmit} loading={loading}>
                    {transl.save}
                </Button>
                <FormMessage error={error} success={success}/>
            </form>
        </div>
    );
}

export default ResetPass
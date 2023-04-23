import Button from 'app/[locale]/_common/components/button/button.component'
import {NextPage} from 'next'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import useResetPass from 'app/[locale]/auth/reset-password/_components/reset-password.hook'
import Input from 'app/[locale]/_common/components/input/input.component'

const ResetPass: NextPage = () => {
    const {transl, mappedResetPass, inputs, onChange, onValidate, onSubmit} = useResetPass()

    return (
        <div className={'auth'}>
            <form className={'auth__form'}>
                <div className={'auth__title'}>{transl.title}</div>
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
                <Input
                    className={'auth__input'}
                    name={'passwordConfirm'}
                    placeholder={transl.inputs.passwordConfirm}
                    value={inputs.values.passwordConfirm}
                    onChange={onChange}
                    error={inputs.errors.passwordConfirm}
                    onValidate={onValidate}
                    type={'password'}
                />
                <Button className='auth__button' onClick={onSubmit} loading={mappedResetPass.loading}>
                    {transl.save}
                </Button>
                <FormMessage error={mappedResetPass.error} success={mappedResetPass.success}/>
            </form>
        </div>
    );
}

export default ResetPass
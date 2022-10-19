import {FC} from 'react'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import React from 'react'
import useRegister from 'components/sign-in-up/sign-up/register/register.hook'

const Register: FC<RegisterProps> = (props) => {
    const {register} = props
    const {transl, inputs, handleChange, handleValidate, handleSubmit} = useRegister()

    return (
        <form className={'sign__form'}>
            <Input
                className={'sign__input'}
                name={'name'}
                placeholder={transl.inputs.name}
                value={inputs.values.name}
                handleChange={handleChange}
                error={inputs.errors.name}
                handleValidate={handleValidate}
            />
            <Input
                className={'sign__input'}
                name={'email'}
                placeholder={transl.inputs.email}
                value={inputs.values.email}
                handleChange={handleChange}
                error={inputs.errors.email}
                handleValidate={handleValidate}
            />
            <Input
                className={'sign__input'}
                name={'password'}
                placeholder={transl.inputs.password}
                value={inputs.values.password}
                handleChange={handleChange}
                error={inputs.errors.password}
                handleValidate={handleValidate}
                type={'password'}
            />
            <Input
                className={'sign__input'}
                name={'passwordConfirm'}
                placeholder={transl.inputs.passwordConfirm}
                value={inputs.values.passwordConfirm}
                handleChange={handleChange}
                error={inputs.errors.passwordConfirm}
                handleValidate={handleValidate}
                validateDeps={[inputs.values.password]}
                type={'password'}
            />
            <div className="sign__bottom">
                <Button className="sign__button sign__button--up" onClick={handleSubmit} loading={register.loading}>
                    {transl.signUp}
                </Button>
                <FormMessage success={register.success} error={register.error}/>
                <div className={'sign__consent'}>
                    {transl.consent}
                </div>
            </div>
        </form>
    )
}

export default Register
import React from 'react'
import useSignUp from 'components/sign-in-up/sign-up/sign-up.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'

export type SignUpProps = {
    setSign: () => void
}

const SignUp: React.FC<SignUpProps> = (props) => {

    const {setSign} = props
    const {inputs, handleChange, transl, handleValidate, content} = useSignUp()

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">{transl.signUp}</div>
                <div className="sign__content-link" onClick={setSign}>{transl.switch}</div>
            </div>
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
                    type={'password'}
                />
                <div className="sign__bottom">
                    <Button className="sign__button sign__button--up" onClick={() => {}}>
                        {transl.signUp}
                    </Button>
                    <div className={'sign__consent'}>
                        {transl.consent}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
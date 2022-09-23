import React from 'react'
import Input from "../../common/input/input.component"
import useSignUp from "./sign-up.hook"

export type SignUpProps = {
    setSign: () => void
}

const SignUp: React.FC<SignUpProps> = (props) => {

    const {setSign} = props
    const {inputs, handleChange, transl, content} = useSignUp()

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">{transl.signUp}</div>
                <div className="sign__content-link" onClick={setSign}>{transl.switch}</div>
            </div>
            <form className={'sign__form'}>
                <Input
                    className={'sign__input'}
                    placeholder={transl.inputs.name}
                    name={'name'}
                    value={inputs.values.name}
                    error={inputs.errors.name}
                    handleChange={handleChange}
                />
                <Input
                    className={'sign__input'}
                    placeholder={transl.inputs.email}
                    name={'email'}
                    value={inputs.values.email}
                    error={inputs.errors.email}
                    handleChange={handleChange}
                />
                <Input
                    className={'sign__input'}
                    placeholder={transl.inputs.password}
                    name={'password'}
                    value={inputs.values.password}
                    error={inputs.errors.password}
                    handleChange={handleChange}
                />
                <Input
                    className={'sign__input'}
                    placeholder={transl.inputs.passwordConfirm}
                    name={'passwordConfirm'}
                    value={inputs.values.passwordConfirm}
                    error={inputs.errors.passwordConfirm}
                    handleChange={handleChange}
                />
                <div className="sign__bottom">
                    <button className="sign__button sign__button--up">{transl.signUp}</button>
                    <div className={'sign__consent'}>
                        {transl.consent}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
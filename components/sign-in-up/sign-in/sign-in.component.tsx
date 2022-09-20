import React from 'react'
import Link from "next/link"
import Input from "../../common/input/input.component"
import Button from "../../common/button/button.component"
import useSignIn from "./sign-in.hook"
import Spinner from "../../common/spinner/spinner.component"

type SignInProps= {
    setSign: () => void
}

const SignIn: React.FC<SignInProps> = (props) => {

    const {setSign} = props
    const {inputs, handleChange, handleClick, error, loading, success, handleValidate, transl} = useSignIn()

    return (
        <div className={'sign__content'}>
            <div className="sign__content-top">
                <div className="sign__content-title">{transl.signIn}</div>
                <div className="sign__content-link" onClick={setSign}>{transl.switch}</div>
            </div>
            <form className={'sign__form'}>
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
                <div className={`form-message ${error? 'form-message--error' : ''} ${success ? 'form-message--success' : ''}`}>
                    {error}
                    {success && transl.success}
                </div>
                <div className="sign__bottom">
                    <Button className="sign__button" onClick={handleClick}>
                        {loading? <Spinner/> : transl.signIn}
                    </Button>
                    <Link href={'/'}>
                        <a className="sign__forget">{transl.forget}</a>
                    </Link>
                    <div className='sign__consent'>
                        {transl.consent}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn
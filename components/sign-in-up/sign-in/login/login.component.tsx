import {FC, MouseEvent} from "react"
import Input from "../../../common/input/input.component"
import Button from "../../../common/button/button.component"
import Spinner from "../../../common/spinner/spinner.component"
import useLogin from "./login.hook"
import FormMessage from "../../../common/form-message/form-message.component";

type LoginProps = {
    handleResetPass: (event: MouseEvent<HTMLElement>) => void
}

const Login: FC<LoginProps> = (props) => {

    const {handleResetPass} = props
    const {transl, inputs, handleChange, handleClick, handleValidate, loading, error, success} = useLogin()

    return (
        <form className={'sign__reset'}>
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
            <div className="sign__bottom">
                <Button className="sign__button" onClick={handleClick} loading={loading}>
                    {transl.signIn}
                </Button>
                <Button className="sign__forget" onClick={handleResetPass}>
                    {transl.forget}
                </Button>
                <FormMessage success={success} error={error}/>
                <div className='sign__consent'>
                    {transl.consent}
                </div>
            </div>
        </form>
    )
}

export default Login
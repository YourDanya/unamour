import {FC, MouseEvent} from "react"
import Input from "../../../common/input/input.component"
import Button from "../../../common/button/button.component"
import useReset from "./reset.hook"
import FormMessage from "../../../common/form-message/form-message.component"

type ResetProps = {
    handleResetPass: (event: MouseEvent<HTMLElement>) => void
}

const Reset: FC<ResetProps> = (props) => {

    const {handleResetPass} = props
    const {transl, inputs, handleChange, handleValidate, forgetSubmit, loading, success, error} = useReset()

    return (
        <form className={'sign__reset'}>
            <div className={'sign__explanation'}>
                {transl.explanation}
            </div>
            <Input
                placeholder={transl.inputs.email}
                className={'sign__input'}
                name={'email'}
                value={inputs.values.email}
                error={inputs.errors.email}
                handleChange={handleChange}
                handleValidate={handleValidate}
            />
            <div className="sign__bottom">
                <Button className="sign__button sign__button--reset" onClick={forgetSubmit} loading={loading}>
                    {transl.title}
                </Button>
                <Button className="sign__forget" onClick={handleResetPass}>
                    {transl.switch}
                </Button>
                <FormMessage success={success} error={error}/>
            </div>
        </form>
    )
}

export default Reset
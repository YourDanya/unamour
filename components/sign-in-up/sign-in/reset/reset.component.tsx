import {FC, MouseEvent} from 'react'
import Button from 'components/common/button/button.component'
import useReset from 'components/sign-in-up/sign-in/reset/reset.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import Input from 'components/common/input/input.component'

type ResetProps = {
    handleResetPass: (event: MouseEvent<HTMLElement>) => void
}

const Reset: FC<ResetProps> = (props) => {

    const {handleResetPass} = props
    const {transl, inputs, handleChange, handleValidate, forgetSubmit, loading, success, error} = useReset()

    return (
        <>
            {!success? (
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

                    </div>
                </form>
            ) : (
                <FormMessage success={success} error={error}/>
            )}
        </>
    )
}

export default Reset
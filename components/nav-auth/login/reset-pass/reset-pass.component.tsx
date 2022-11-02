import {FC} from 'react'
import Button from 'components/common/button/button.component'
import useResetPass from 'components/nav-auth/login/reset-pass/reset-pass.hook'
import FormMessage from 'components/common/form-message/form-message.component'
import Input from 'components/common/input/input.component'
import {ResetProps} from 'components/nav-auth/login/reset-pass/reset-pass.types'

const ResetPass: FC<ResetProps> = (props) => {
    const {handleResetPass} = props
    const {transl, inputs, handleChange, handleValidate, forgetSubmit, forgetPass} = useResetPass()

    return (
        <>
            {!forgetPass.success? (
                <form className={'nav-auth__reset'}>
                    <div className={'nav-auth__explanation'}>
                        {transl.explanation}
                    </div>
                    <Input
                        placeholder={transl.inputs.email}
                        className={'nav-auth__input'}
                        name={'email'}
                        value={inputs.values.email}
                        error={inputs.errors.email}
                        handleChange={handleChange}
                        handleValidate={handleValidate}
                    />
                    <div className="nav-auth__bottom">
                        <Button className="nav-auth__button nav-auth__button--reset" onClick={forgetSubmit} loading={forgetPass.loading}>
                            {transl.title}
                        </Button>
                        <Button className="nav-auth__forget" onClick={handleResetPass}>
                            {transl.switch}
                        </Button>
                    </div>
                </form>
            ) : (
                <FormMessage success={forgetPass.success} error={forgetPass.error}/>
            )}
        </>
    )
}

export default ResetPass
import {FC} from 'react'
import useActivate from 'components/sign-in-up/sign-up/activate/activate.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import React from 'react'
import Timer from 'components/common/timer/timer.component'
import {ActivateProps} from 'components/sign-in-up/sign-up/activate/activate.types'

const Activate: FC<ActivateProps> = (props) => {
    const {sendCode} = props
    const {inputs, handleChange, handleValidate, transl, activateSubmit, sendCodeSubmit, activate} = useActivate(props)

    return (
        <form className={'sign__form'}>
            <div className="sign__form-title">
                {transl.title}
            </div>
            <Input
                className={'sign__input'}
                name={'code'}
                placeholder={transl.inputs.code}
                value={inputs.values.code}
                handleChange={handleChange}
                error={inputs.errors.code}
                handleValidate={handleValidate}
            />
            <div className="sign__bottom">
                <Button className="sign__button" onClick={activateSubmit} loading={activate.loading}>
                    {transl.activate}
                </Button>
                {sendCode.timer && (
                    <Timer initTimer={sendCode.timer}>
                        {(timer: string) => (
                            <Button className={'sign__resend'} onClick={sendCodeSubmit}>
                                {transl.resend} {transl.in} {timer}
                            </Button>
                        )}
                    </Timer>
                )}
                <FormMessage success={activate.success} error={activate.error}/>
            </div>
        </form>
    )
}

export default Activate
import {FC} from 'react'
import useActivateUser from 'components/nav-auth/register/activate-user/activate-user.hook'
import Input from 'components/common/input/input.component'
import Button from 'components/common/button/button.component'
import FormMessage from 'components/common/form-message/form-message.component'
import React from 'react'
import Timer from 'components/common/timer/timer.component'
import {ActivateProps} from 'components/nav-auth/register/activate-user/activate-user.types'

const ActivateUser: FC<ActivateProps> = (props) => {

    const {sendRegisterCode} = props
    const {
        inputs, handleChange, handleValidate, transl, activateSubmit, sendRegisterCodeSubmit, activateUser, clearInitTimer
    } = useActivateUser(props)

    return (
        <form className={'nav-auth__form'}>
            <div className="nav-auth__form-title">
                {transl.title}
            </div>
            <Input
                className={'nav-auth__input nav-auth__input--activate'}
                name={'code'}
                placeholder={transl.inputs.code}
                value={inputs.values.code}
                handleChange={handleChange}
                error={inputs.errors.code}
                handleValidate={handleValidate}
            />
            <div className="nav-auth__bottom">
                <Button className="nav-auth__button" onClick={activateSubmit} loading={activateUser.loading}>
                    {transl.activate}
                </Button>
                <Timer initTimer={sendRegisterCode.timer} onSubmit={sendRegisterCodeSubmit} clearInitTimer={clearInitTimer}>
                    {(timer, onSubmit) => (
                        <Button className={'nav-auth__resend'} onClick={onSubmit} loading={sendRegisterCode.loading}>
                            {transl.resend} {transl.in} {timer}
                        </Button>
                    )}
                </Timer>
                <FormMessage success={activateUser.success} error={activateUser.error}/>
            </div>
        </form>
    )
}

export default ActivateUser
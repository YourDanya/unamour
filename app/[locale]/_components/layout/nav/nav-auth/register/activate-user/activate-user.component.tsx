'use client'

import {FC} from 'react'
import {ActivateProps} from 'app/[locale]/_components/layout/nav/nav-auth/register/activate-user/activate-user.types'
import Timer from 'app/[locale]/_common/components/timer/timer.component'
import useActivateUser from 'app/[locale]/_components/layout/nav/nav-auth/register/activate-user/activate-user.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import Input from 'app/[locale]/_common/components/input/input.component'

const ActivateUser: FC<ActivateProps> = (props) => {
    const {
        inputs, onChange, onValidate, transl, onActivateUser, onSendRegisterCode, sendRegisterCode, timer,

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
                onChange={onChange}
                error={inputs.errors.code}
                onValidate={onValidate}
            />
            <div className="nav-auth__bottom">
                <Button className="nav-auth__button" onClick={onActivateUser} loading={activateUser.loading}>
                    {transl.activate}
                </Button>
                <Button className={'nav-auth__resend'} onClick={onSendRegisterCode} loading={sendRegisterCode.loading}>
                    {transl.resend} {transl.in} {timer}
                </Button>
                <FormMessage success={activateUser.success} error={activateUser.error}/>
            </div>
        </form>
    )
}

export default ActivateUser

{/*<Timer*/}
{/*    initTimer={sendRegisterCode.timer}*/}
{/*    onSubmit={onSendRegisterCode}*/}
{/*    clearInitTimer={clearInitTimer}*/}
{/*>*/}
{/*    {(timer, onSubmit) => (*/}
{/*    )}*/}
{/*</Timer>*/}
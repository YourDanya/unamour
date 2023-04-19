import {FC} from 'react'
import {
    ActivateEmailProps
} from 'app/[locale]/profile/update-user/components/other/update-email/activate-email/activate-email.types'
import Timer from 'app/[locale]/_common/components/timer/timer.component'
import Button from 'app/[locale]/_common/components/button/button.component'
import FormMessage from 'app/[locale]/_common/components/form-message/form-message.component'
import useActivateEmail from 'app/[locale]/profile/update-user/components/other/update-email/activate-email/activate-email.hook'
import Input from 'app/[locale]/_common/components/input/input.component'


const ActivateEmail: FC<ActivateEmailProps> = (props) => {
    const {sendUpdateEmailCode} = props
    const {inputs, onChange, onValidate, transl, activateEmailSubmit, sendUpdateEmailCodeSubmit, activateEmail,
        clearInitTimer} = useActivateEmail(props)

    return (
        <form className={'nav-auth__form'}>
            <div className="nav-auth__form-title">
                {transl.title}
            </div>
            <Input
                className={'nav-auth__input'}
                name={'code'}
                placeholder={transl.inputs.code}
                value={inputs.values.code}
                onChange={onChange}
                error={inputs.errors.code}
                onValidate={onValidate}
            />
            <div className="nav-auth__bottom">
                <Button className="nav-auth__button" onClick={activateEmailSubmit} loading={activateEmail.loading}>
                    {transl.activate}
                </Button>
                <Timer
                    initTimer={sendUpdateEmailCode.timer}
                    onSubmit={sendUpdateEmailCodeSubmit}
                    clearInitTimer={clearInitTimer}
                >
                    {(timer, onSubmit) => (
                        <Button className={'nav-auth__resend'} onClick={onSubmit} loading={sendUpdateEmailCode.loading}>
                            {transl.resend} {transl.in} {timer}
                        </Button>
                    )}
                </Timer>
                <FormMessage success={activateEmail.success} error={activateEmail.error}/>
            </div>
        </form>
    )
}

export default ActivateEmail
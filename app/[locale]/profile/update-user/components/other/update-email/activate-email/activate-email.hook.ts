import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useEffect} from 'react'
import activateEmailContent
    from 'app/[locale]/profile/update-user/components/other/update-email/activate-email/activate-email.content'
import {
    ActivateEmailProps
} from 'app/[locale]/profile/update-user/components/other/update-email/activate-email/activate-email.types'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/[locale]/_store/user/user.store'
import {useRef} from 'react'
import {useState} from 'react'
import {parseTimer} from 'app/[locale]/_common/utils/main/main.utils'
import {useTimer} from 'app/[locale]/_common/hooks/component/component.hooks'

const useActivateEmail = (props: ActivateEmailProps) => {
    const {hideModal} = props

    const [transl, content] = useLocale(activateEmailContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const updateEmail = useUserStore(state => state.updateEmail)

    const sendCode = useApiCall('sendUpdateEmailCode', {
        method: 'POST'
    })

    const onSendCode = () => {
        sendCode.start()
    }

    useEffect(() => {
        if (updateEmail.success) {
            sendCode.start()
        }
    }, [updateEmail.success])

    const [timer, setTimer] = useState('')

    useTimer({timer, setTimer})

    const activateEmail = useApiCall<{timer: number}>('auth/send-update-email-code', {
        method: 'POST',
        body: inputs.values,
        onSuccess: ({timer}) => {
           setTimer(parseTimer(timer))
        }
    })

    const onActivateEmail = withSubmit(() => {
        activateEmail.start()
    })

    useEffect(() => {
        if (activateEmail.success) {
            resetValues()
            setTimeout(() => {
                hideModal()
            })
        }
    }, [activateEmail.success])

    const mappedActivateEmail = useMapApiRes({
        res: activateEmail, successTransl: transl.success, errorFourTransl: transl.error
    })

    return {
        transl, onChange, onValidate, inputs, onActivateEmail, mappedActivateEmail, timer, onSendCode, sendCode
    }
}

export default useActivateEmail
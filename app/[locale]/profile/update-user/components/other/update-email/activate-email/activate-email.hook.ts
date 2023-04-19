import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {resetUserFieldSuccess} from 'app/[locale]/_redux/user/user.slice'
import {sendUpdateEmailCodeAsync} from 'app/[locale]/_redux/user/user.thunk'
import {activateEmailAsync} from 'app/[locale]/_redux/user/user.thunk'
import activateEmailContent
    from 'app/[locale]/profile/update-user/components/other/update-email/activate-email/activate-email.content'
import {resetUserFieldTimer} from 'app/[locale]/_redux/user/user.slice'
import {
    ActivateEmailProps
} from 'app/[locale]/profile/update-user/components/other/update-email/activate-email/activate-email.types'

const useActivateEmail = (props: ActivateEmailProps) => {
    const {hideModal} = props

    const [transl, content] = useLocale(activateEmailContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const activateEmail = useParamSelector(selectUserField, 'activateEmail')

    const dispatch = useDispatch()
    const activateEmailSubmit = withSubmit(() => {
        dispatch(activateEmailAsync(inputs.values))
    })
    const sendUpdateEmailCodeSubmit = () => {
        dispatch(sendUpdateEmailCodeAsync())
    }
    const clearInitTimer = () => {
        dispatch(resetUserFieldTimer('sendUpdateEmailCode'))
    }

    useEffect(() => {
        if (activateEmail.success) {
            resetValues()
            setTimeout(() => {
                resetUserFieldSuccess('sendUpdateEmailCode')
                resetUserFieldSuccess('activateEmail')
                hideModal()
            })
        }
    }, [activateEmail.success])

    return {transl, onChange, onValidate, inputs, activateEmailSubmit, activateEmail, clearInitTimer,
    sendUpdateEmailCodeSubmit}
}

export default useActivateEmail
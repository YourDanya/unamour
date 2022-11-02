import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {resetSuccess} from 'redux/user/user.slice'
import activateEmailContent from 'components/update-user/other/update-email/activate-email/activate-email.content'
import {resetTimer} from 'redux/user/user.slice'
import {ActivateEmailProps} from 'components/update-user/other/update-email/activate-email/activate-email.types'
import {sendUpdateEmailCodeAsync} from 'redux/user/user.thunk'
import {activateEmailAsync} from 'redux/user/user.thunk'

const useActivateEmail = (props: ActivateEmailProps) => {
    const {hideModal} = props

    const [transl, content] = useLocale(activateEmailContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)

    const activateEmail = useParamSelector(selectUserField, 'activateEmail')

    const dispatch = useDispatch()
    const activateEmailSubmit = withSubmit(() => {
        dispatch(activateEmailAsync(inputs.values))
    })
    const sendUpdateEmailCodeSubmit = () => {
        dispatch(sendUpdateEmailCodeAsync())
    }
    const clearInitTimer = () => {
        dispatch(resetTimer('sendUpdateEmailCode'))
    }

    useEffect(() => {
        if (activateEmail.success) {
            resetValues()
            setTimeout(() => {
                resetSuccess('sendUpdateEmailCode')
                resetSuccess('activateEmail')
                hideModal()
            })
        }
    }, [activateEmail.success])

    return {transl, handleChange, handleValidate, inputs, activateEmailSubmit, activateEmail, clearInitTimer,
    sendUpdateEmailCodeSubmit}
}

export default useActivateEmail
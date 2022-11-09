import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import activateUserContent from 'components/nav-auth/register/activate-user/activate-user.content'
import {useDispatch} from 'react-redux'
import {sendRegisterCodeAsync} from 'redux/user/user.thunk'
import {ActivateProps} from 'components/nav-auth/register/activate-user/activate-user.types'
import {resetTimer} from 'redux/user/user.slice'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {activateUserAsync} from 'redux/user/user.thunk'
import {useEffect} from 'react'
import {resetSuccess} from 'redux/user/user.slice'
import {useRouter} from 'next/router'

const useActivateUser = (props: ActivateProps) => {
    const {sendRegisterCode} = props
    const [transl, content] = useLocale(activateUserContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)
    const activateUser = useParamSelector(selectUserField, 'activateUser')

    const dispatch = useDispatch()
    const activateSubmit = withSubmit(() => {
        dispatch(activateUserAsync(inputs.values))
    })
    const sendRegisterCodeSubmit = () => {
        dispatch(sendRegisterCodeAsync())
    }
    const clearInitTimer = () => {
        dispatch(resetTimer('sendRegisterCode'))
    }

    const router = useRouter()
    useEffect(() => {
        if (activateUser.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-input-user')
                dispatch(resetSuccess('register'))
                dispatch(resetSuccess('activateUser'))
                dispatch(resetSuccess('sendRegisterCode'))
            }, 1000)
        }
    },[activateUser.success])

    return {inputs, onChange, onValidate, transl, activateSubmit, sendRegisterCodeSubmit, sendRegisterCode,
        activateUser, clearInitTimer}
}

export default useActivateUser
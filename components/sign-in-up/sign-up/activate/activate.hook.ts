import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import activateContent from 'components/sign-in-up/sign-up/activate/activate.content'
import {useDispatch} from 'react-redux'
import {activateAsync} from 'redux/user/user.thunk'
import {sendCodeAsync} from 'redux/user/user.thunk'
import {useShallSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {AppState} from 'redux/store'
import {ActivateProps} from 'components/sign-in-up/sign-up/activate/activate.types'
import {clearTimer} from 'redux/user/user.slice'

const useActivate = (props: ActivateProps) => {
    const {sendCode} = props
    const [transl, content] = useLocale(activateContent)
    const {inputs, handleChange, handleValidate, withSubmit} = useInput(content.inputs)
    const activate = useShallSelector((state: AppState) => selectUserField(state, 'activate'))

    const dispatch = useDispatch()
    const activateSubmit = withSubmit(() => {
        dispatch(activateAsync(inputs.values))
    })
    const sendCodeSubmit = () => {
        dispatch(sendCodeAsync())
    }
    const clearInitTimer = () => {
        dispatch(clearTimer('sendCode'))
    }


    return {inputs, handleChange, handleValidate, transl, activateSubmit, sendCodeSubmit, sendCode, activate, clearInitTimer}
}

export default useActivate
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import activateContent from 'components/sign-in-up/sign-up/activate/activate.content'
import {useDispatch} from 'react-redux'
import {activateAsync} from 'redux/user/user.thunk'
import {sendCodeAsync} from 'redux/user/user.thunk'
import {ActivateProps} from 'components/sign-in-up/sign-up/activate/activate.types'
import {resetTimer} from 'redux/user/user.slice'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'

const useActivate = (props: ActivateProps) => {
    const {sendCode} = props
    const [transl, content] = useLocale(activateContent)
    const {inputs, handleChange, handleValidate, withSubmit} = useInput(content.inputs)
    const activate = useParamSelector(selectUserField, 'activate')

    const dispatch = useDispatch()
    const activateSubmit = withSubmit(() => {
        dispatch(activateAsync(inputs.values))
    })
    const sendCodeSubmit = () => {
        dispatch(sendCodeAsync())
    }
    const clearInitTimer = () => {
        dispatch(resetTimer('sendCode'))
    }

    return {inputs, handleChange, handleValidate, transl, activateSubmit, sendCodeSubmit, sendCode, activate, clearInitTimer}
}

export default useActivate
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useDispatch} from 'react-redux'
import loginContent from 'pages/auth/login/login.content'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'

const useSignIn = () => {
    const [transl, content] = useLocale(loginContent)
    const {inputs, onChange, onValidate, withSubmit} = useInput(content.inputs)

    const dispatch = useDispatch()
    const login = useParamSelector(selectUserField,'login')

    const handleSubmit = withSubmit(() => {
        console.log('resetting password')
    })

    return {content, transl, inputs, onChange, onValidate, handleSubmit, login}
}

export default useSignIn
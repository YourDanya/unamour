import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useDispatch} from 'react-redux'
import loginContent from 'pages/auth/login/login.content'
import {useArgSelector} from 'hooks/enhanced/enhanced.hooks'
import {_selectUserField} from 'redux/user/user.selectors'

const useSignIn = () => {
    const [transl, content] = useLocale(loginContent)
    const {inputs, handleChange, handleValidate, withSubmit} = useInput(content.inputs)

    const dispatch = useDispatch()
    const login = useArgSelector(_selectUserField,'login')

    const handleSubmit = withSubmit(() => {
        console.log('resetting password')
    })

    return {content, transl, inputs, handleChange, handleValidate, handleSubmit, login}
}

export default useSignIn
import {useEffect} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {loginAsync} from 'redux/user/user.thunk'
import {resetSuccess} from 'redux/user/user.slice'
import {useInput} from 'hooks/input/input.hooks'
import loginFormContent from 'components/nav-auth/login/login-form/login-form.content'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'

const useLoginForm = () => {
    const [transl, content] = useLocale(loginFormContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const login = useParamSelector(selectUserField, 'login')

    const dispatch = useDispatch()
    const handleClick = withSubmit(() => {
        dispatch(loginAsync(inputs.values))
    })

    const router = useRouter()

    useEffect(() => {
        if (login.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-input-user')
                dispatch(resetSuccess('login'))
            }, 1000)
        }
    }, [login.success])

    return {content, transl, inputs, onChange, handleClick, onValidate, login}
}

export default useLoginForm
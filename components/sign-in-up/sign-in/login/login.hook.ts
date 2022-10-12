import {useEffect} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {loginAsync} from 'redux/user/user.thunk'
import {selectUserField} from 'redux/user/user.selectors'
import {resetSuccess} from 'redux/user/user.slice'
import {useInput} from 'hooks/input/input.hooks'
import loginContent from 'components/sign-in-up/sign-in/login/login.content'
import {AppState} from 'redux/store'
import {useShallSelector} from 'hooks/enhanced/enhanced.hooks'

const useLogin = () => {
    const [transl, content] = useLocale(loginContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)

    const dispatch = useDispatch()
    const signIn = useShallSelector((state: AppState) => selectUserField(state, 'login'))

    const handleClick = withSubmit(() => {
        dispatch(loginAsync(inputs.values))
    })

    const router = useRouter()

    useEffect(() => {
        if (signIn.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-user')
                dispatch(resetSuccess('login'))
            }, 1000)
        }
    }, [signIn.success])

    return {content, transl, inputs, handleChange, handleClick, handleValidate, signIn}
}

export default useLogin
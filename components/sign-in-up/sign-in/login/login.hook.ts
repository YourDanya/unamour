import {useEffect} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {loginAsync} from 'redux/user/user.thunk'
import {resetSuccess} from 'redux/user/user.slice'
import {useInput} from 'hooks/input/input.hooks'
import loginContent from 'components/sign-in-up/sign-in/login/login.content'
import {useState} from 'react'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'

const useLogin = () => {
    const [transl, content] = useLocale(loginContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)

    const [counter, setCounter] = useState(0)
    const login = useParamSelector(selectUserField, 'login')

    console.log('rendering login')

    const dispatch = useDispatch()
    const handleClick = withSubmit(() => {
        dispatch(loginAsync(inputs.values))
    })

    const router = useRouter()

    useEffect(() => {
        if (login.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-user')
                dispatch(resetSuccess('login'))
            }, 1000)
        }
    }, [login.success])

    return {content, transl, inputs, handleChange, handleClick, handleValidate, login, counter, setCounter}
}

export default useLogin
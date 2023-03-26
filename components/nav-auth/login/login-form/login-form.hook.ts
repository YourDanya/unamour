import {useEffect} from 'react'
import {useLocale} from 'hooks/other/other.hooks'
import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {resetUserFieldSuccess} from 'redux/user/user.slice'
import {useInput} from 'hooks/input/input.hooks'
import loginFormContent from 'components/nav-auth/login/login-form/login-form.content'
import {useApiCall} from 'utils/api/api-v2.utils'
import {setUser} from 'redux/user/user.slice'
import {User} from 'redux/user/user.types'
import {useMapApiRes} from 'utils/api/api-v2.utils'
import useFavoritesStore from 'store/favorites/favorites.store'

const useLoginForm = () => {
    const [transl, content] = useLocale(loginFormContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const dispatch = useDispatch()

    const login = useApiCall('auth/login', {
        method: 'POST',
        body: inputs.values,
        onSuccess: (data: {user: User}) => {
            dispatch(setUser(data))
        }
    })

    const onLogin = withSubmit(() => {
        login.start()
    })

    const router = useRouter()

    useEffect(() => {
        if (login.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-user')
                dispatch(resetUserFieldSuccess('login'))
            }, 1000)
        }
    }, [login.success])

    const mappedLogin = useMapApiRes({res: login, successTransl: transl.success, errorFourTransl: transl.error})

    return {content, transl, inputs, onChange, onLogin, onValidate, login, mappedLogin}
}

export default useLoginForm
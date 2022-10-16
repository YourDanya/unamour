import signUpContent from 'components/sign-in-up/sign-up/sign-up.content'
import {useLocale} from 'hooks/other/other.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {AppState} from 'redux/store'
import {useShallSelector} from 'hooks/enhanced/enhanced.hooks'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {sendCodeAsync} from 'redux/user/user.thunk'
import {useRef} from 'react'
import {useState} from 'react'
import {selectUser} from 'redux/user/user.selectors'
import {useMemo} from 'react'
import {UserField} from 'redux/user/user.types'

const useSignUp = () => {
    const [transl] = useLocale(signUpContent)
    const field: UserField = useMemo(() => {return 'register'}, [])
    const register = useShallSelector((state: AppState) => selectUserField(state, field))
    const sendCode = useShallSelector((state: AppState) => selectUserField(state, 'sendCode'))
    const _ = useShallSelector((state: AppState) => selectUserField(state, 'forgetPass'))
    const __ = useShallSelector((state: AppState) => selectUserField(state, 'getUser'))
    const ___ = useShallSelector((state: AppState) => selectUserField(state, 'resetPass'))
    const user = useShallSelector((state: AppState) => selectUser(state))

    const [counter, setCounter] = useState(0)
    const dispatch = useDispatch()
    const sent = useRef(false)

    useEffect(() => {
        if (register.success && !sent.current) {
            sent.current = true
            dispatch(sendCodeAsync())
        }
    }, [register.success])

    return {transl, register, sendCode, counter, setCounter}
}

export default useSignUp
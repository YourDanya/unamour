import registerContent from 'components/nav-auth/register/register.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {sendRegisterCodeAsync} from 'redux/user/user.thunk'
import {useRef} from 'react'
import {useState} from 'react'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {SelectTimerField} from 'redux/store.types'

const useSignUp = () => {
    const [transl] = useLocale(registerContent)
    const [counter, setCounter] = useState(0)

    const register = useParamSelector(selectUserField, 'register')
    const sendRegisterCode = useParamSelector(selectUserField, 'sendRegisterCode') as SelectTimerField

    const dispatch = useDispatch()
    const sent = useRef(false)

    useEffect(() => {
        if (register.success && !sent.current) {
            sent.current = true
            dispatch(sendRegisterCodeAsync())
        }
    }, [register.success])

    return {transl, register, sendRegisterCode, counter, setCounter}
}

export default useSignUp
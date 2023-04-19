import {useRef} from 'react'
import {useState} from 'react'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import registerContent from 'app/[locale]/_components/layout/nav/nav-auth/register/register.content'
import {useEffect} from 'react'
import {SelectTimerField} from 'app/[locale]/_redux/store.types'
import {useDispatch} from 'react-redux'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {sendRegisterCodeAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

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
import signUpContent from 'components/sign-in-up/sign-up/sign-up.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {sendCodeAsync} from 'redux/user/user.thunk'
import {useRef} from 'react'
import {useState} from 'react'
import {useArgSelector} from 'hooks/enhanced/enhanced.hooks'
import {_selectUserField} from 'redux/user/user.selectors'
import {SelectTimerField} from 'redux/store.types'

const useSignUp = () => {
    const [transl] = useLocale(signUpContent)
    const [counter, setCounter] = useState(0)

    const register = useArgSelector(_selectUserField, 'register')
    const sendCode = useArgSelector(_selectUserField, 'sendCode') as SelectTimerField

    console.log('rendering sign-up')

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
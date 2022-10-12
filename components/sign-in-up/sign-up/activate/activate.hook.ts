import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import activateContent from 'components/sign-in-up/sign-up/activate/activate.content'
import {useDispatch} from 'react-redux'
import {activateAsync} from 'redux/user/user.thunk'
import {useEffect} from 'react'
import {sendCodeAsync} from 'redux/user/user.thunk'
import {useShallSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {AppState} from 'redux/store'
import React from 'react'

const useActivate = () => {
    const [transl, content] = useLocale(activateContent)
    const {inputs, handleChange, handleValidate, withSubmit} = useInput(content.inputs)
    const sendCode = useShallSelector((state: AppState) => selectUserField(state, 'sendCode'))
    const activate = useShallSelector((state: AppState) => selectUserField(state, 'activate'))

    const dispatch = useDispatch()
    const activateSubmit = withSubmit(() => {
        dispatch(activateAsync(inputs.values))
    })

    const sendCodeSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (true) dispatch(sendCodeAsync())
    }

    useEffect(() => {
        dispatch(sendCodeAsync())
    }, [])

    const initTimer = activate.timer as number

    return {inputs, handleChange, handleValidate, transl, activateSubmit, sendCodeSubmit, sendCode, activate, initTimer}
}

export default useActivate
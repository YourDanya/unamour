'use client'

import {useRouter} from 'next/navigation'
import activateUserContent from 'app/[locale]/_components/layout/nav/nav-auth/register/activate-user/activate-user.content'
import {ActivateProps} from 'app/[locale]/_components/layout/nav/nav-auth/register/activate-user/activate-user.types'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {resetUserFieldTimer} from 'app/[locale]/_redux/user/user.slice'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {sendRegisterCodeAsync} from 'app/[locale]/_redux/user/user.thunk'
import {activateUserAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {resetUserFieldSuccess} from 'app/[locale]/_redux/user/user.slice'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'

const useActivateUser = (props: ActivateProps) => {
    const {sendRegisterCode} = props
    const [transl, content] = useLocale(activateUserContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)
    const activateUser = useParamSelector(selectUserField, 'activateUser')

    const dispatch = useDispatch()
    const activateSubmit = withSubmit(() => {
        dispatch(activateUserAsync(inputs.values))
    })
    const sendRegisterCodeSubmit = () => {
        dispatch(sendRegisterCodeAsync())
    }
    const clearInitTimer = () => {
        dispatch(resetUserFieldTimer('sendRegisterCode'))
    }

    const router = useRouter()
    useEffect(() => {
        if (activateUser.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-user')
                dispatch(resetUserFieldSuccess('register'))
                dispatch(resetUserFieldSuccess('activateUser'))
                dispatch(resetUserFieldSuccess('sendRegisterCode'))
            }, 1000)
        }
    },[activateUser.success])

    return {inputs, onChange, onValidate, transl, activateSubmit, sendRegisterCodeSubmit, sendRegisterCode,
        activateUser, clearInitTimer}
}

export default useActivateUser
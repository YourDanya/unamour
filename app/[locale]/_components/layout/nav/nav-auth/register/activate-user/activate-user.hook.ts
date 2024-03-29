'use client'

import {useRouter} from 'next/navigation'
import activateUserContent
    from 'app/[locale]/_components/layout/nav/nav-auth/register/activate-user/activate-user.content'
import {ActivateProps} from 'app/[locale]/_components/layout/nav/nav-auth/register/activate-user/activate-user.types'
import {useEffect} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useState} from 'react'
import useTimer from 'app/_common/hooks/helpers/timer/timer.hook'
import parseTimer from 'app/_common/utils/helpers/parse-timer/parse-timer.util'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'
import {MouseAction} from 'app/_common/types/types'
import {User} from 'app/_common/store/user/user.types'
import {useUserStore} from 'app/_common/store/user/user.store'

const useActivateUser = (props: ActivateProps) => {
    const [transl, content] = useLocale(activateUserContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const setUser = useUserStore(state => state.setUser)

    const activateUser = useApiCall<{user: User}>('auth/activate-user-with-code', {
        method: 'POST',
        body: inputs.values,
        onSuccess: ({user}) => {
            setUser(user)
        }
    })

    const sendRegisterCode = useApiCall<{ timer: number }>('auth/send-activation-code', {
        method: 'POST',
        onSuccess: ({timer}) => {
            setTimer(parseTimer(timer))
        },
        onError: (params: { timer: number }) => {
            const timer = params?.timer
            if (timer) {
                setTimer(parseTimer(timer))
            }
        }
    })

    const onActivateUser = withSubmit(() => {
        activateUser.start()
    })
    const onSendRegisterCode: MouseAction = (event) => {
        event.preventDefault()
        sendRegisterCode.start()
    }

    const router = useRouter()
    useEffect(() => {
        if (activateUser.success) {
            resetValues()
            setTimeout(() => {
                router.push('/profile/update-user')
            }, 1000)
        }
    }, [activateUser.success])

    const [timer, setTimer] = useState('')

    useTimer({timer, setTimer})

    const mappedActivateUser = useMapApiRes({
        res: activateUser, errorFourTransl: transl.error, successTransl: transl.success
    })

    useEffect(() => {
        sendRegisterCode.start()
    }, [])

    return {
        inputs, onChange, onValidate, transl, activateUser, onActivateUser, onSendRegisterCode, sendRegisterCode,
        timer, mappedActivateUser
    }
}

export default useActivateUser
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import resetPasswordContent from 'app/[locale]/auth/reset-password/_components/reset-password.content'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useSearchParams} from 'next/navigation'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'

const useResetPass = () => {
    const [transl, content] = useLocale(resetPasswordContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs, transl.inputs)

    const token = useSearchParams().get('token') as string

    const resetPass = useApiCall('auth/recover-account', {
        method: 'POST',
        body: {...inputs.values, token}
    })

    const router = useRouter()

    const onSubmit = withSubmit(() => {
        resetPass.start()
    })

    useEffect(() => {
        if (resetPass.success) {
            resetValues()
            setTimeout(() => {
                // router.push('/')
            }, 1000)
        }
    }, [resetPass.success])

    const mappedResetPass = useMapApiRes({
        res: resetPass, errorFourTransl: transl.error, successTransl: transl.success
    })

    return {content, transl, inputs, onChange, onValidate, onSubmit, mappedResetPass}
}

export default useResetPass
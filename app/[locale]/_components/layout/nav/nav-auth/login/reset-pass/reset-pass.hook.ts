import {useEffect} from 'react'
import {resetPassContent} from 'app/[locale]/_components/layout/nav/nav-auth/login/reset-pass/reset-pass.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'

const useResetPass = () => {
    const [transl, content] = useLocale(resetPassContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const forgetPass = useApiCall('auth/send-recovery-link', {
        method: 'POST',
        body: inputs.values
    })

    const forgetSubmit = withSubmit(() => {
        forgetPass.start()
    })

    useEffect(() => {
        if (forgetPass.success){
            setTimeout(() => {
                resetValues()
            }, 1000)
        }
    }, [forgetPass.success])

    const mappedForgetPass = useMapApiRes({
        res: forgetPass, successTransl: transl.success, errorFourTransl: transl.error
    })

    return {content, transl, inputs, onChange, onValidate, forgetSubmit, mappedForgetPass}
}

export default useResetPass
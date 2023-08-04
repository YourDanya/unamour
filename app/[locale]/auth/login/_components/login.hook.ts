import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import loginContent from 'app/[locale]/auth/login/_components/login.content'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'

const useLogin = () => {
    const [transl, content] = useLocale(loginContent)
    const {inputs, onChange, onValidate, withSubmit} = useInput(content.inputs)

    const login = useApiCall('auth/login', {
        method: 'POST',
        body: inputs.values
    })

    const onSubmit = withSubmit(() => {
        login.start()
    })

    const mappedLogin = useMapApiRes({
        res: login, errorFourTransl: transl.error, successTransl: transl.success
    })

    return {content, transl, inputs, onChange, onValidate, onSubmit, mappedLogin}
}

export default useLogin
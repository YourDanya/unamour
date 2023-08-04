import registerFormContent from 'app/[locale]/_components/layout/nav/nav-auth/register/register-form/register-form.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/_common/store/user/user.store'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'

const useRegisterForm = () => {
    const [transl, content] = useLocale(registerFormContent)
    const {inputs, onChange, onValidate, withSubmit} = useInput(content.inputs, transl.inputs)

    const setRegister = useUserStore(state => state.setRegister)
    const register = useApiCall('auth/create-inactive-user', {
        method: 'POST',
        body: inputs.values,
        onSuccess: () => {
            setRegister({success: true})
        }
    })

    const onSubmit = withSubmit(() => {
        register.start()
    })

    const mappedRegister = useMapApiRes({
        res: register, errorFourTransl: transl.error, successTransl: transl.success
    })

    return {transl, inputs, onChange, onValidate, onSubmit, mappedRegister}
}

export default useRegisterForm
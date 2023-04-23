import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import updateEmailFormContent
    from 'app/[locale]/profile/update-user/components/other/update-email/update-email-form/update-email-form.content'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/[locale]/_store/user/user.store'

const useUpdateEmailForm = () => {
    const [transl, content] = useLocale(updateEmailFormContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const setUpdateEmail = useUserStore(state => state.setUpdateEmail)

    const updateEmail = useApiCall('auth/update-email', {
        method: 'POST',
        body: inputs.values,
        onSuccess: () => {
            setUpdateEmail( {success: true})
        }
    })

    const onSubmit = withSubmit(() => {
        updateEmail.start()
    })

    const mappedUpdateEmail = useMapApiRes({
        res: updateEmail, successTransl: transl.success, errorFourTransl: transl.error
    })

    return {transl, onChange, onValidate, inputs, onSubmit, mappedUpdateEmail}
}

export default useUpdateEmailForm
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import updateEmailFormContent
    from 'app/[locale]/profile/update-user/components/other/update-email/update-email-form/update-email-form.content'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'
import {useUserStore} from 'app/_common/store/user/user.store'

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
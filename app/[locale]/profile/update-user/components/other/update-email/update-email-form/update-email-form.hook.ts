import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import {updateEmailAsync} from 'app/[locale]/_redux/user/user.thunk'
import updateEmailFormContent
    from 'app/[locale]/profile/update-user/components/other/update-email/update-email-form/update-email-form.content'

const useUpdateEmailForm = () => {
    const [transl, content] = useLocale(updateEmailFormContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const updateEmail = useParamSelector(selectUserField, 'updateEmail')

    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(updateEmailAsync(inputs.values))
    })

    return {transl, onChange, onValidate, inputs, handleSubmit, updateEmail}
}

export default useUpdateEmailForm
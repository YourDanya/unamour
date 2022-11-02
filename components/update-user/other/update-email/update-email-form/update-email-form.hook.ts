import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import updateEmailFormContent from 'components/update-user/other/update-email/update-email-form/update-email-form.content'
import {updateEmailAsync} from 'redux/user/user.thunk'

const useUpdateEmailForm = () => {
    const [transl, content] = useLocale(updateEmailFormContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)

    const updateEmail = useParamSelector(selectUserField, 'updateEmail')

    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(updateEmailAsync(inputs.values))
    })

    return {transl, handleChange, handleValidate, inputs, handleSubmit, updateEmail}
}

export default useUpdateEmailForm
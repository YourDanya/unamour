import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import registerFormContent from 'components/nav-auth/register/register-form/register-form.content'
import {registerAsync} from 'redux/user/user.thunk'
import {useDispatch} from 'react-redux'

const useRegisterForm = () => {
    const [transl, content] = useLocale(registerFormContent)
    const {inputs, onChange, onValidate, withSubmit} = useInput(content.inputs, transl.inputs)
    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(registerAsync(inputs.values))
    })
    return {transl, inputs, onChange, onValidate, handleSubmit}
}

export default useRegisterForm
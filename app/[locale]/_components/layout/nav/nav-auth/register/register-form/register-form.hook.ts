import {useDispatch} from 'react-redux'
import registerFormContent from 'app/[locale]/_components/layout/nav/nav-auth/register/register-form/register-form.content'
import {registerAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'

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
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import registerContent from 'components/sign-in-up/sign-up/register/register.content'
import {registerAsync} from 'redux/user/user.thunk'
import {useDispatch} from 'react-redux'

const useRegister = () => {
    const [transl, content] = useLocale(registerContent)
    const {inputs, handleChange, handleValidate, withSubmit} = useInput(content.inputs, transl.inputs)
    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(registerAsync(inputs.values))
    })
    return {transl, inputs, handleChange, handleValidate, handleSubmit}
}

export default useRegister
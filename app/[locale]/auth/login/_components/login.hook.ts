import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import loginContent from 'app/[locale]/auth/login/_components/login.content'

const useSignIn = () => {
    const [transl, content] = useLocale(loginContent)
    const {inputs, onChange, onValidate, withSubmit} = useInput(content.inputs)

    const login = useParamSelector(selectUserField,'login')

    const handleSubmit = withSubmit(() => {
        console.log('resetting password')
    })

    return {content, transl, inputs, onChange, onValidate, handleSubmit, login}
}

export default useSignIn
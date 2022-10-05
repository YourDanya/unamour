import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {selectField} from 'redux/user/user.selectors'
import signInContent from 'pages/auth/sign-in/sign-in.content'

const useSignIn = () => {
    const [transl, content] = useLocale(signInContent)
    const {inputs, handleChange, handleValidate, withSubmit} = useInput(content.inputs)

    const dispatch = useDispatch()
    const {loading, success, error} = useSelector(selectField('signIn'))

    const handleSubmit = withSubmit(() => {
        console.log('resetting password')
    })

    return {content, transl, inputs, handleChange, handleValidate, handleSubmit, success, loading, error}
}

export default useSignIn
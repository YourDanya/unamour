import resetPasswordContent from 'pages/auth/reset-password/reset-password.content'
import {useDispatch, useSelector} from 'react-redux'
import {selectField} from 'redux/user/user.selectors'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {resetPassword} from 'redux/user/user.thunk'

const useResetPass = () => {
    const [transl, content] = useLocale(resetPasswordContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs, transl.inputs)
    const dispatch = useDispatch()

    const resetPass = useSelector(selectField('resetPass'))
    const {loading, error} = resetPass
    const router = useRouter()
    const token = router.query.token as string

    const handleSubmit = withSubmit(() => {
        dispatch(resetPassword({...inputs.values, token}))
    })

    useEffect(() => {
        if (resetPass.success) {
            resetValues()
            setTimeout(() => {
                // router.push('/')
            }, 1000)
        }
    }, [resetPass.success])

    return {content, transl, inputs, handleChange, handleValidate, handleSubmit, resetPass}
}

export default useResetPass
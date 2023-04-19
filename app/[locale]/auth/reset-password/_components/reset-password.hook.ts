import {useDispatch} from 'react-redux'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useRouter} from 'next/navigation'
import {useEffect} from 'react'
import {resetPassAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import resetPasswordContent from 'app/[locale]/auth/reset-password/_components/reset-password.content'

const useResetPass = () => {
    const [transl, content] = useLocale(resetPasswordContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs, transl.inputs)

    const dispatch = useDispatch()
    const resetPass = useParamSelector(selectUserField, 'resetPass')

    const router = useRouter()
    const token = router.query.token as string

    const handleSubmit = withSubmit(() => {
        dispatch(resetPassAsync({...inputs.values, token}))
    })

    useEffect(() => {
        if (resetPass.success) {
            resetValues()
            setTimeout(() => {
                // router.push('/')
            }, 1000)
        }
    }, [resetPass.success])

    return {content, transl, inputs, onChange, onValidate, handleSubmit, resetPass}
}

export default useResetPass
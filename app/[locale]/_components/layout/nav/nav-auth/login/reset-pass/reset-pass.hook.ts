import {useEffect} from 'react'
import {resetPassContent} from 'app/[locale]/_components/layout/nav/nav-auth/login/reset-pass/reset-pass.content'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {useDispatch} from 'react-redux'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {forgetPassAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'

const useResetPass = () => {
    const [transl, content] = useLocale(resetPassContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)
    const forgetPass = useParamSelector(selectUserField, 'forgetPass')

    const dispatch = useDispatch()
    const forgetSubmit = withSubmit(() => {
        dispatch(forgetPassAsync({email: inputs.values.email}))
    })

    useEffect(() => {
        if (forgetPass.success) setTimeout(() => {
            resetValues()
        }, 1000)
    }, [forgetPass.success])

    return {content, transl, inputs, onChange, onValidate, forgetSubmit, forgetPass}
}

export default useResetPass
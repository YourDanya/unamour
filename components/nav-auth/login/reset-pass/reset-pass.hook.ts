import {useEffect} from 'react'
import {resetPassContent} from 'components/nav-auth/login/reset-pass/reset-pass.content'
import {useDispatch} from 'react-redux'
import {forgetPassAsync} from 'redux/user/user.thunk'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'

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
import {useEffect} from 'react'
import {resetContent} from 'components/sign-in-up/sign-in/reset/reset.content'
import {useDispatch} from 'react-redux'
import {forgetPassAsync} from 'redux/user/user.thunk'
import {selectUserField} from 'redux/user/user.selectors'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {useShallSelector} from 'hooks/enhanced/enhanced.hooks'
import {AppState} from 'redux/store'

const useReset = () => {
    const [transl, content] = useLocale(resetContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)
    const forgetPass = useShallSelector((state: AppState) => selectUserField(state, 'forgetPass'))

    const dispatch = useDispatch()

    const forgetSubmit = withSubmit(() => {
        dispatch(forgetPassAsync({email: inputs.values.email}))
    })

    useEffect(() => {
        if (forgetPass.success) setTimeout(() => {
            resetValues()
        }, 1000)
    }, [forgetPass.success])

    return {content, transl, inputs, handleChange, handleValidate, forgetSubmit, forgetPass}
}

export default useReset
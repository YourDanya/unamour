import {useEffect} from 'react'
import {resetContent} from 'components/sign-in-up/sign-in/reset/reset.content'
import {useDispatch, useSelector} from 'react-redux'
import {forgetPassword} from 'redux/user/user.thunk'
import {selectField} from 'redux/user/user.selectors'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const useReset = () => {
    const [transl, content] = useLocale(resetContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)
    const {loading, success, error} = useSelector(selectField('forgetPass'))

    const dispatch = useDispatch()

    const forgetSubmit = withSubmit(() => {
        dispatch(forgetPassword({email: inputs.values.email}))
    })

    useEffect(() => {
        if (success) setTimeout(() => {
            resetValues()
        }, 1000)
    }, [success])

    return {content, transl, inputs, handleChange, handleValidate, forgetSubmit, loading, success, error}
}

export default useReset
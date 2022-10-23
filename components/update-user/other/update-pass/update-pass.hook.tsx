import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import updatePassContent from 'components/update-user/other/update-pass/update-pass.content'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {useDispatch} from 'react-redux'
import {selectUserField} from 'redux/user/user.selectors'
import {updatePassAsync} from 'redux/user/user.thunk'
import {useEffect} from 'react'
import {resetSuccess} from 'redux/user/user.slice'
import {UpdatePassProps} from 'components/update-user/other/update-pass/update-pass.types'

const useUpdatePass = (props: UpdatePassProps) => {
    const {hideModal} = props

    const [transl, content] = useLocale(updatePassContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs, transl.inputs)

    const updatePass = useParamSelector(selectUserField, 'updatePass')
    
    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(updatePassAsync(inputs.values))
    })

    useEffect(() => {
        if (updatePass.success) {
            resetValues()
            setTimeout(() => {
                dispatch(resetSuccess('updatePass'))
                hideModal()
            }, 3000)
        }
    }, [updatePass.success])

    return {transl, handleChange, handleValidate, inputs, handleSubmit, updatePass}
}

export default useUpdatePass
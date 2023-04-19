import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {useDispatch} from 'react-redux'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {updatePassAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useEffect} from 'react'
import {resetUserFieldSuccess} from 'app/[locale]/_redux/user/user.slice'
import {UpdatePassProps} from 'app/[locale]/profile/update-user/components/other/update-pass/update-pass.types'
import updatePassContent from 'app/[locale]/profile/update-user/components/other/update-pass/update-pass.content'

const useUpdatePass = (props: UpdatePassProps) => {
    const {hideModal} = props

    const [transl, content] = useLocale(updatePassContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs, transl.inputs)

    const updatePass = useParamSelector(selectUserField, 'updatePass')
    
    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(updatePassAsync(inputs.values))
    })

    useEffect(() => {
        if (updatePass.success) {
            resetValues()
            setTimeout(() => {
                dispatch(resetUserFieldSuccess('updatePass'))
                hideModal()
            }, 3000)
        }
    }, [updatePass.success])

    return {transl, onChange, onValidate, inputs, handleSubmit, updatePass}
}

export default useUpdatePass
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useDispatch} from 'react-redux'
import {resetUserFieldSuccess} from 'app/[locale]/_redux/user/user.slice'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import {useRouter} from 'next/navigation'
import {deleteUserAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useLayoutEffect} from 'react'
import {DeleteUserProps} from 'app/[locale]/profile/update-user/components/other/delete-user/delete-user.types'
import deleteUserContent from 'app/[locale]/profile/update-user/components/other/delete-user/delete-user.content'

const useDeleteUser = (props: DeleteUserProps) => {
    const {hideModal} = props
    const [transl, content] = useLocale(deleteUserContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const deleteUser = useParamSelector(selectUserField, 'deleteUser')
    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(deleteUserAsync(inputs.values))
    })

    const router = useRouter()
    useLayoutEffect(() => {
        if (deleteUser.success) {
            resetValues()
            dispatch(resetUserFieldSuccess('deleteUser'))
            hideModal()
            router.push('/')
        }
    }, [deleteUser.success])

    return {transl, onChange, onValidate, inputs, handleSubmit, deleteUser}
}

export default useDeleteUser
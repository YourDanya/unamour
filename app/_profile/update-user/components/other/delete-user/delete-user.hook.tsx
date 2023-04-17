import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import deleteUserContent from 'components/update-user/other/delete-user/delete-user.content'
import {DeleteUserProps} from 'components/update-user/other/delete-user/delete-user.types'
import {useDispatch} from 'react-redux'
import {resetUserFieldSuccess} from 'redux/user/user.slice'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useRouter} from 'next/router'
import {deleteUserAsync} from 'redux/user/user.thunk'
import {useLayoutEffect} from 'react'

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
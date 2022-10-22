import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import deleteUserContent from 'components/update-user/other/delete-user/delete-user.content'
import {DeleteUserProps} from 'components/update-user/other/delete-user/delete-user.types'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {clearSuccess} from 'redux/user/user.slice'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'
import {useRouter} from 'next/router'
import {deleteUserAsync} from 'redux/user/user.thunk'

const useDeleteUser = (props: DeleteUserProps) => {
    const {hideModal} = props
    const [transl, content] = useLocale(deleteUserContent)
    const {inputs, handleChange, handleValidate, withSubmit, resetValues} = useInput(content.inputs)

    const deleteUser = useParamSelector(selectUserField, 'deleteUser')
    const dispatch = useDispatch()
    const handleSubmit = withSubmit(() => {
        dispatch(deleteUserAsync(inputs.values))
    })

    const router = useRouter()
    useEffect(() => {
        if (deleteUser.success) {
            resetValues()
            dispatch(clearSuccess('deleteUser'))
            hideModal()
            router.push('/')
        }
    }, [deleteUser.success])

    return {transl, handleChange, handleValidate, inputs, handleSubmit, deleteUser}
}

export default useDeleteUser
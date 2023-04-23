import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {useRouter} from 'next/navigation'
import {useLayoutEffect} from 'react'
import {DeleteUserProps} from 'app/[locale]/profile/update-user/components/other/delete-user/delete-user.types'
import deleteUserContent from 'app/[locale]/profile/update-user/components/other/delete-user/delete-user.content'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useMapApiRes} from 'app/[locale]/_common/hooks/api/api.hooks'

const useDeleteUser = (props: DeleteUserProps) => {
    const {hideModal} = props
    const [transl, content] = useLocale(deleteUserContent)
    const {inputs, onChange, onValidate, withSubmit, resetValues} = useInput(content.inputs)

    const deleteUser = useApiCall( 'auth/delete-me', {
        method: 'POST',
        body: inputs.values
    })

    const onSubmit = withSubmit(() => {
        deleteUser.start()
    })

    const router = useRouter()

    useLayoutEffect(() => {
        if (deleteUser.success) {
            resetValues()
            hideModal()
            router.push('/')
        }
    }, [deleteUser.success])

    const mappedDeleteUser = useMapApiRes({
        res: deleteUser, successTransl: transl.success, errorFourTransl: transl.error
    })

    return {transl, onChange, onValidate, inputs, onSubmit, mappedDeleteUser}
}

export default useDeleteUser
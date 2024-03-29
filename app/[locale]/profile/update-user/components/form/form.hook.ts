import formContent from 'app/[locale]/profile/update-user/components/form/form.content'
import {useEffect} from 'react'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {MouseEvent} from 'react'
import {useUserStore} from 'app/_common/store/user/user.store'
import {useState} from 'react'
import {useApiCall} from 'app/_common/hooks/api/api.hooks'
import {User} from 'app/_common/store/user/user.types'
import {useMapApiRes} from 'app/_common/hooks/api/api.hooks'
import {useValidateInput} from 'app/_common/hooks/input/input-v2.hooks'
import {useInputChange} from 'app/_common/hooks/input/input-v2.hooks'
import {useMapInputs} from 'app/_common/hooks/input/input-v2.hooks'

const useUpdateUserForm = () => {
    const [transl, content] = useLocale(formContent)

    const initInputs = useMapInputs(formContent.common.inputs)
    const [values, setValues] = useState(initInputs.values)
    const [errors, setErrors] = useState(initInputs.errors)

    const {errRef, onValidate} = useValidateInput({errors, validations: initInputs.validations})

    const {onChange, valuesRef} = useInputChange({
        values,
        changeCallback: ({changeValues, name}) => {
            setValues(changeValues)
            onValidate(name, changeValues[name])
        }
    })

    const onSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        if (errRef.current.count < 0) {
            updateUser.start()
        }
    }

    const user = useUserStore(state => state.user)

    const updateUser = useApiCall<{user: User}>( 'auth/update-user', {
        method: 'POST',
        onSuccess: ({user}) => {
            setValues(user)
        }
    })

    useEffect(() => {
        if (user) {
            setValues(user)
        }
    }, [user])

    const mappedUpdateUser = useMapApiRes({
        res: updateUser, errorFourTransl: transl.error, successTransl: transl.success
    })

    return {transl, values, errors, onChange, onValidate, onSubmit, mappedUpdateUser}
}

export default useUpdateUserForm
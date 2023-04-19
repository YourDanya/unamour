import {selectUserField} from 'app/[locale]/_redux/user/user.selectors'
import formContent from 'app/[locale]/profile/update-user/components/form/form.content'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {updateUserAsync} from 'app/[locale]/_redux/user/user.thunk'
import {useParamSelector} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {selectUser} from 'app/[locale]/_redux/user/user.selectors'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {MouseEvent} from 'react'

const useUpdateUserForm = () => {
    const [transl, content] = useLocale(formContent)
    const {inputs, onChange, onValidate: _onValidate, setOuterValues, errRef, setOuterErrors
    } = useInput(content.inputs)

    const dispatch = useDispatch()
    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        getEntries(inputs.values).forEach(( entry) => {
            const [key, value] =  entry
            if (value) _onValidate(key)
        }, <typeof inputs.values> {})
        let allowSend = true
        const sendData = getEntries(inputs.values).reduce((accum, entry) => {
            const [key, value] = entry
            if (inputs.values[key]) {
                if (!errRef.current.errors[key]) accum[key] = value
                else allowSend = false
            }
            return accum
        }, <typeof inputs.values> {})
        if (allowSend) dispatch(updateUserAsync(sendData))
    }

    const onValidate = (name: string) => {
        const key = <keyof typeof inputs.values> name
        if (errRef.current.errors[key]) {
            if (inputs.values[key] === '') {
                errRef.current.count -= 1
                errRef.current.errors[key] = null
                setOuterErrors({...errRef.current.errors})
            } else {
                _onValidate(key)
            }
        }
    }

    const user = useSelector(selectUser)
    const updateUser = useParamSelector(selectUserField, 'updateUser')

    useEffect(() => {
        if (user) {
            setOuterValues(user)
        }
    }, [user])

    return {transl, inputs, onChange, onValidate, handleSubmit, updateUser}
}

export default useUpdateUserForm
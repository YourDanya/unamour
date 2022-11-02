import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {MouseEvent} from 'react'
import formContent from 'components/update-user/update-user-form/update-user-form.content'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {selectUser} from 'redux/user/user.selectors'
import {Entry} from 'types/types'
import {useDispatch} from 'react-redux'
import {updateUserAsync} from 'redux/user/user.thunk'
import {useParamSelector} from 'hooks/enhanced/enhanced.hooks'
import {selectUserField} from 'redux/user/user.selectors'

const useUpdateUserForm = () => {
    const [transl, content] = useLocale(formContent)
    const {inputs, handleChange, handleValidate: _handleValidate, setOuterValues, errRef, setOuterErrors
    } = useInput(content.inputs)

    const dispatch = useDispatch()
    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
        Object.entries(inputs.values).forEach(( entry) => {
            const [key, value] = <Entry<typeof inputs.values>> entry
            if (value) _handleValidate(key)
        }, <typeof inputs.values> {})
        let allowSend = true
        const sendData = Object.entries(inputs.values).reduce((accum, entry) => {
            const [key, value] = entry as Entry<typeof inputs.values>
            if (inputs.values[key]) {
                if (!errRef.current.errors[key]) accum[key] = value
                else allowSend = false
            }
            return accum
        }, <typeof inputs.values> {})
        if (allowSend) dispatch(updateUserAsync(sendData))
    }

    const handleValidate = (name: string) => {
        const key = <keyof typeof inputs.values> name
        if (errRef.current.errors[key]) {
            if (inputs.values[key] === '') {
                errRef.current.count -= 1
                errRef.current.errors[key] = null
                setOuterErrors({...errRef.current.errors})
            } else {
                _handleValidate(key)
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

    return {transl, inputs, handleChange, handleValidate, handleSubmit, updateUser}
}

export default useUpdateUserForm
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'
import {MouseEvent} from 'react'
import formContent from 'components/update-user/update-user-form/update-user-form.content'

const useUpdateUserForm = () => {
    const [transl, content] = useLocale(formContent)
    const {inputs, handleChange, handleValidate} = useInput(content.inputs)

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault()
    }

    return {transl, inputs, handleChange, handleValidate, handleSubmit}
}

export default useUpdateUserForm
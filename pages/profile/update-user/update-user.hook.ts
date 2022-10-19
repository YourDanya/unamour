import {useDispatch} from 'react-redux'
import {useLocale} from 'hooks/other/other.hooks'
import {updateUserContent} from 'pages/profile/update-user/update-user.content'
import {useInput} from 'hooks/input/input.hooks'
import React from 'react'

const useUpdateUser = () => {
    const [transl, content] = useLocale(updateUserContent)
    const {inputs, handleChange, handleValidate} = useInput(content.inputs)

    const dispatch = useDispatch()

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
    }

    const deleteAccount = (event: React.MouseEvent<HTMLElement>) => {

    }

    return {content, transl, inputs, handleChange, handleSubmit,  handleValidate}
}

export default useUpdateUser
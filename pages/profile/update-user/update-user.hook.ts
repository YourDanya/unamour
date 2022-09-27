import {useDispatch} from 'react-redux'
import {useLocale} from 'hooks/event-handler.hooks'
import {updateUserContent} from 'pages/profile/update-user/update-user.content'
import {useInput} from 'hooks/input/input.hooks'
import React from 'react'

const useUpdateUser = () => {
    const [content, translation] = useLocale(updateUserContent)
    const {inputs, handleChange, setInputs, handleValidate} = useInput(content.inputs)

    const dispatch = useDispatch()

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
    }

    return {content, translation, inputs, handleChange, handleSubmit, setInputs, handleValidate}
}

export default useUpdateUser
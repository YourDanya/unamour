import contactsContent from 'pages/contacts/contacts.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const useContact = () => {
    const [transl, content] = useLocale(contactsContent)
    const {inputs, handleChange, handleValidate, errRef, resetValues} = useInput(content.inputs)
    const handleSubmit = () => {

    }
    return {transl, inputs, handleChange, handleValidate, handleSubmit}
}

export default useContact
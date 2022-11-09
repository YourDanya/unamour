import contactsContent from 'pages/contacts/contacts.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useInput} from 'hooks/input/input.hooks'

const useContact = () => {
    const [transl, content] = useLocale(contactsContent)
    const {inputs, onChange, onValidate, errRef, resetValues} = useInput(content.inputs)
    const handleSubmit = () => {

    }
    return {transl, inputs, onChange, onValidate, handleSubmit}
}

export default useContact
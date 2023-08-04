
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useInput} from 'app/_common/hooks/input/input.hooks'
import contactsContent from 'app/[locale]/contacts/_components/contacts.content'

const useContact = () => {
    const [transl, content] = useLocale(contactsContent)
    const {inputs, onChange, onValidate, errRef, resetValues} = useInput(content.inputs)
    const handleSubmit = () => {

    }

    return {transl, inputs, onChange, onValidate, handleSubmit}
}

export default useContact
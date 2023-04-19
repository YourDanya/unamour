
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {useInput} from 'app/[locale]/_common/hooks/input/input.hooks'
import contactsContent from 'app/[locale]/contacts/_components/contacts.content'

const useContact = () => {
    const [transl, content] = useLocale(contactsContent)
    const {inputs, onChange, onValidate, errRef, resetValues} = useInput(content.inputs)
    const handleSubmit = () => {

    }

    // const {width, height, elemRef} = useGetParamForImages()

    return {transl, inputs, onChange, onValidate, handleSubmit}
}

export default useContact
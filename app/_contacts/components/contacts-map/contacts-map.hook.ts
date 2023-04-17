import {useLocale} from 'hooks/other/other.hooks'
import contactsMapContent from 'components/contacts/contacts-map/contacts-map.content'

const useContactsMap = () => {
    const [transl] = useLocale(contactsMapContent)

    return {transl}
}

export default useContactsMap
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import contactsMapContent from 'app/[locale]/contacts/_components/contacts-map/contacts-map.content'

const useContactsMap = () => {
    const [transl] = useLocale(contactsMapContent)

    return {transl}
}

export default useContactsMap
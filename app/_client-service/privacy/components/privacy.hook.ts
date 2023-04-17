import privacyContent from 'pages/client-service/privacy/privacy.content'
import {useServiceMap} from 'hooks/other/other.hooks'
import {useLocale} from 'hooks/other/other.hooks'

const usePrivacy = () => {
    const [transl] = useLocale(privacyContent)
    const children = useServiceMap(transl)
    return {children}
}

export default usePrivacy
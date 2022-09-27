import privacyContent from 'pages/client-service/privacy/privacy.content'
import {useServiceMap} from 'hooks/other.hook'
import {useLocale} from 'hooks/event-handler.hooks'

const usePrivacy = () => {
    const [_, translation] = useLocale(privacyContent)
    const children = useServiceMap(translation)
    return {children}
}

export default usePrivacy
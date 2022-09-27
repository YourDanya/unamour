import {useServiceMap} from 'hooks/other.hook'
import policyContent from 'pages/client-service/policy/policy.content'
import {useLocale} from 'hooks/event-handler.hooks'

const usePolicy = () => {
    const [_, translation] = useLocale(policyContent)
    const children = useServiceMap(translation)
    return {children}
}

export default usePolicy
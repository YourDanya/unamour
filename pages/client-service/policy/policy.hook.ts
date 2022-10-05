import policyContent from 'pages/client-service/policy/policy.content'
import {useLocale} from 'hooks/other/other.hooks'
import {useServiceMap} from 'hooks/other/other.hooks'

const usePolicy = () => {
    const [transl] = useLocale(policyContent)
    const children = useServiceMap(transl)
    return {children}
}

export default usePolicy
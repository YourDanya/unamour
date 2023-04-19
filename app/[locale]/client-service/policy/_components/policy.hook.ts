import {useServiceMap} from 'app/[locale]/_common/hooks/mappers/mappers.hooks'
import policyContent from 'app/[locale]/client-service/policy/_components/policy.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const usePolicy = () => {
    const [transl] = useLocale(policyContent)
    const children = useServiceMap(transl)
    return {children}
}

export default usePolicy
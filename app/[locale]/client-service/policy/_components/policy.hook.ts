import useServiceMap from 'app/_common/hooks/mappers/service-map/service-map.hook'
import policyContent from 'app/[locale]/client-service/policy/_components/policy.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'

const usePolicy = () => {
    const [transl] = useLocale(policyContent)
    const children = useServiceMap(transl)
    return {children}
}

export default usePolicy
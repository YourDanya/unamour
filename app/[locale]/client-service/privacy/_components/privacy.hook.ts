import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import privacyContent from 'app/[locale]/client-service/privacy/_components/privacy.content'
import useServiceMap from 'app/_common/hooks/mappers/service-map/service-map.hook'

const usePrivacy = () => {
    const [transl] = useLocale(privacyContent)
    const children = useServiceMap(transl)
    return {children}
}

export default usePrivacy
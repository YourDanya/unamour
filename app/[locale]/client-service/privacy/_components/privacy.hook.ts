import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import privacyContent from 'app/[locale]/client-service/privacy/_components/privacy.content'
import {useServiceMap} from 'app/[locale]/_common/hooks/mappers/mappers.hooks'

const usePrivacy = () => {
    const [transl] = useLocale(privacyContent)
    const children = useServiceMap(transl)
    return {children}
}

export default usePrivacy
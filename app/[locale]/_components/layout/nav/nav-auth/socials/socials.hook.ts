import socialsContent from 'app/[locale]/_components/layout/nav/nav-auth/socials/socials.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useSocials = () => {
    const [transl] = useLocale(socialsContent)
    return {transl}
}

export default useSocials
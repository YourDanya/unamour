import {useLocale} from 'hooks/other/other.hooks'
import socialsContent from 'components/nav-auth/socials/socials.content'

const useSocials = () => {
    const [transl] = useLocale(socialsContent)
    return {transl}
}

export default useSocials
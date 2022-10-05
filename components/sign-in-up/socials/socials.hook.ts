import {useLocale} from 'hooks/other/other.hooks'
import socialsContent from 'components/sign-in-up/socials/socials.content'

const useSocials = () => {
    const [transl] = useLocale(socialsContent)
    return {transl}
}

export default useSocials
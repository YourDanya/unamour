import socialsContent from 'app/[locale]/_components/layout/nav/nav-auth/socials/socials.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'

const useSocials = () => {
    const [transl] = useLocale(socialsContent)
    return {transl}
}

export default useSocials
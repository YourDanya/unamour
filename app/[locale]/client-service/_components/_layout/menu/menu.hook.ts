import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import menuContent from 'app/[locale]/client-service/_components/_layout/menu/menu.content'
import {useRouter} from 'next/navigation'

const useMenu = () => {
    const [transl, content] = useLocale(menuContent)
    const router = useRouter()
    const pathname = router.pathname

    return {content, transl, pathname}
}

export default useMenu
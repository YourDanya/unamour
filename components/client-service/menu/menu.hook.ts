import menuContent from 'components/client-service/menu/menu.content'
import {useRouter} from 'next/router'
import {useLocale} from 'hooks/other/other.hooks'

const useMenu = () => {
    const [transl, content] = useLocale(menuContent)
    const router = useRouter()
    const pathname = router.pathname

    return {content, translation, pathname}
}

export default useMenu
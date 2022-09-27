import menuContent from 'components/client-service/menu/menu.content'
import {useRouter} from 'next/router'
import {useLocale} from 'hooks/event-handler.hooks'

const useMenu = () => {
    const [content, translation] = useLocale(menuContent)
    const router = useRouter()
    const pathname = router.pathname

    return {content, translation, pathname}
}

export default useMenu
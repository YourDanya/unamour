import {useLocale} from "../../../hooks/event-handler.hooks"
import menuContent from "./menu.content"
import {useRouter} from "next/router"

const useMenu = () => {
    const [content, translation] = useLocale(menuContent)
    const router = useRouter()
    const pathname = router.pathname

    return {content, translation, pathname}
}

export default useMenu
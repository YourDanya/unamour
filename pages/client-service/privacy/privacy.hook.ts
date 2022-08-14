import {useLocale} from "../../../hooks/event-handler.hooks"
import {useServiceMap} from "../../../hooks/other.hook"
import privacyContent from "./privacy.content";

const usePrivacy = () => {
    const [_, translation] = useLocale(privacyContent)
    const children = useServiceMap(translation)
    return {children}
}

export default usePrivacy
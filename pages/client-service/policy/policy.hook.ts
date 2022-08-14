import {useLocale} from "../../../hooks/event-handler.hooks"
import policyContent from "./policy.content"
import {useServiceMap} from "../../../hooks/other.hook"

const usePolicy = () => {
    const [_, translation] = useLocale(policyContent)
    const children = useServiceMap(translation)
    return {children}
}

export default usePolicy
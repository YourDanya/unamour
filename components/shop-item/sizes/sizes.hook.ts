import {useLocale} from "../../../hooks/event-handler.hooks"
import sizesContent from "./sizes.content"

const useSizes = () => {
    const [_, transl] = useLocale(sizesContent)
    return {transl}
}

export default useSizes
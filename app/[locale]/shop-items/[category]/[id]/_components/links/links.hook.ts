import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import {linksContent} from 'app/[locale]/shop-items/[category]/[id]/_components/links/links.content'

const useLinks = () => {
    const [transl] = useLocale(linksContent)
    return {transl}
}

export default useLinks
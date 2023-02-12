import {useLocale} from 'hooks/other/other.hooks'
import {linksContent} from 'components/shop-item/links/links.content'

const useLinks = () => {
    const [transl] = useLocale(linksContent)
    return {transl}
}

export default useLinks
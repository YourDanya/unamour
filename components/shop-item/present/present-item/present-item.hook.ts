import {useLocale} from 'hooks/other/other.hooks'
import presentItemContent from 'components/shop-item/present/present-item/present-item.content'

const usePresentItem = () => {
    const [transl] = useLocale(presentItemContent)

    return {transl}
}

export default usePresentItem
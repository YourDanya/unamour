import sizesContent from 'components/shop-item/sizes/sizes.content'
import {useLocale} from 'hooks/other/other.hooks'

const useSizes = () => {
    const [transl] = useLocale(sizesContent)
    return {transl}
}

export default useSizes
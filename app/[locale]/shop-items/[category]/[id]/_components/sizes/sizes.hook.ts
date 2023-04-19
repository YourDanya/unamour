import sizesContent from 'app/[locale]/shop-items/[category]/[id]/_components/sizes/sizes.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useSizes = () => {
    const [transl] = useLocale(sizesContent)
    return {transl}
}

export default useSizes
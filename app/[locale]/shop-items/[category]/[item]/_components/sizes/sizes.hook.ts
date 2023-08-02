import sizesContent from 'app/[locale]/shop-items/[category]/[item]/_components/sizes/sizes.content'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'

const useSizes = () => {
    const [transl] = useLocale(sizesContent)
    return {transl}
}

export default useSizes
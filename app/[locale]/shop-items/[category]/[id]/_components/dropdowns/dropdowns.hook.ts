import dropdownsContent from 'app/[locale]/shop-items/[category]/[id]/_components/dropdowns/dropdowns.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useDropdowns = () => {
    const [transl] = useLocale(dropdownsContent)
    return {transl}
}

export default useDropdowns
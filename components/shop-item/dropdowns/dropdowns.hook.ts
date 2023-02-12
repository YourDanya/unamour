import {useLocale} from 'hooks/other/other.hooks'
import dropdownsContent from 'components/shop-item/dropdowns/dropdowns.content'

const useDropdowns = () => {
    const [transl] = useLocale(dropdownsContent)
    return {transl}
}

export default useDropdowns
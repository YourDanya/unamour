import dropdownsContent from 'app/[locale]/shop-items/[category]/[item]/_components/dropdowns/dropdowns.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'

const useDropdowns = () => {
    const [transl] = useLocale(dropdownsContent)
    return {transl}
}

export default useDropdowns
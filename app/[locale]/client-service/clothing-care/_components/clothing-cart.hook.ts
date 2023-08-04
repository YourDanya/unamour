import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import clothingCareContent from 'app/[locale]/client-service/clothing-care/_components/clothing-care.content'

const useClothingCare = () => {
    const [transl] = useLocale(clothingCareContent)

    return {transl}
}

export default useClothingCare
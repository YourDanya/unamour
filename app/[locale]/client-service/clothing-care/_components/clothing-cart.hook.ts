import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import clothingCareContent from 'app/[locale]/client-service/clothing-care/_components/clothing-care.content'

const useClothingCare = () => {
    const [transl] = useLocale(clothingCareContent)

    return {transl}
}

export default useClothingCare
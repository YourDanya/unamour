import {useLocale} from 'hooks/other/other.hooks'
import clothingCareContent from 'pages/client-service/clothing-care/clothing-care.content'

const useClothingCare = () => {
    const [transl] = useLocale(clothingCareContent)

    return {transl}
}

export default useClothingCare
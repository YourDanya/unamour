import {useLocale} from 'hooks/other/other.hooks'
import warrantyPeriodContent from 'pages/client-service/warranty-period/warranty-period.content'

const useWarrantyPeriod = () => {
    const [transl] = useLocale(warrantyPeriodContent)
    return {transl}
}

export default useWarrantyPeriod
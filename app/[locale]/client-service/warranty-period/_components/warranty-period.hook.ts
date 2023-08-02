import warrantyPeriodContent from 'app/[locale]/client-service/warranty-period/_components/warranty-period.content'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'

const useWarrantyPeriod = () => {
    const [transl] = useLocale(warrantyPeriodContent)
    return {transl}
}

export default useWarrantyPeriod
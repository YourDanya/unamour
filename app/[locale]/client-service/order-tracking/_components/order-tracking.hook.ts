import orderTrackingContent from 'app/[locale]/client-service/order-tracking/_components/order-tracking.content'
import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'

const useOrderTracking = () => {
    const [transl] = useLocale(orderTrackingContent)
    return {transl}
}

export default useOrderTracking
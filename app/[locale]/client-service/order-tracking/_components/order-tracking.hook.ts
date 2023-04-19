import orderTrackingContent from 'app/[locale]/client-service/order-tracking/_components/order-tracking.content'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'

const useOrderTracking = () => {
    const [transl] = useLocale(orderTrackingContent)
    return {transl}
}

export default useOrderTracking
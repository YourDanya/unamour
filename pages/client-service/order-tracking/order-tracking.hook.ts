import {useLocale} from 'hooks/other/other.hooks'
import orderTrackingContent from 'pages/client-service/order-tracking/order-tracking.content'

const useOrderTracking = () => {
    const [transl] = useLocale(orderTrackingContent)
    return {transl}
}

export default useOrderTracking
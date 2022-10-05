import {useLocale} from 'hooks/other/other.hooks'
import deliveryContent from 'pages/client-service/delivery/delivery.content'

const useDelivery = () => {
    const [transl] = useLocale(deliveryContent)

    return {transl}
}

export default useDelivery
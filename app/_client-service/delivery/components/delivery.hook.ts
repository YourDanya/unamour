import {useLocale} from 'hooks/other/other.hooks'
import deliveryContent from 'pages/client-service/delivery/delivery.content'
import {useServiceMap} from 'hooks/other/other.hooks'

const useDelivery = () => {
    const [transl] = useLocale(deliveryContent)

    const children = useServiceMap(transl)

    return {transl, children}
}

export default useDelivery
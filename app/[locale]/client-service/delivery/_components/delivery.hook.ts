import deliveryContent from 'app/[locale]/client-service/delivery/_components/delivery.content'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'
import {useServiceMap} from 'app/[locale]/_common/hooks/mappers/mappers.hooks'

const useDelivery = () => {
    const [transl] = useLocale(deliveryContent)

    const children = useServiceMap(transl)

    return {transl, children}
}

export default useDelivery
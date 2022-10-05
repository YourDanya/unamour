import {useLocale} from 'hooks/other/other.hooks'
import OrderingContent from 'pages/client-service/ordering/ordering.content'

const useOrdering = () => {
    const [transl] = useLocale(OrderingContent)
    return {transl}
}

export default useOrdering
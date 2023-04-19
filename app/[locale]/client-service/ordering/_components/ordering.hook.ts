import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import orderingContent from 'app/[locale]/client-service/ordering/_components/ordering.content'

const useOrdering = () => {
    const [transl] = useLocale(orderingContent)
    return {transl}
}

export default useOrdering
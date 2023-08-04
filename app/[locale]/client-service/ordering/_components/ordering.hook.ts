import useLocale from 'app/_common/hooks/helpers/locale-deprecated/locale.hook'
import orderingContent from 'app/[locale]/client-service/ordering/_components/ordering.content'

const useOrdering = () => {
    const [transl] = useLocale(orderingContent)
    return {transl}
}

export default useOrdering
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import returnContent from 'app/[locale]/client-service/return/_components/return.content'

const useReturn = () => {
    const [transl] = useLocale(returnContent)
    return {transl}
}

export default useReturn
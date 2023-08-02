import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'
import returnContent from 'app/[locale]/client-service/return/_components/return.content'

const useReturn = () => {
    const [transl] = useLocale(returnContent)
    return {transl}
}

export default useReturn
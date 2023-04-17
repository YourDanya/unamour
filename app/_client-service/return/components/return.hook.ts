import {useLocale} from 'hooks/other/other.hooks'
import returnContent from 'pages/client-service/return/return.content'

const useReturn = () => {
    const [transl] = useLocale(returnContent)
    return {transl}
}

export default useReturn
import {useModal} from 'hooks/component/component.hooks'
import clientServiceContent from 'components/client-service/service.content'
import {useLocale} from 'hooks/other/other.hooks'

const useClientService = () => {
    const [transl] = useLocale(clientServiceContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    return {modalState, showModal, hideModal, transl}
}

export default useClientService
import {useModal} from 'app/[locale]/_common/hooks/component/component.hooks'
import clientServiceContent from 'app/[locale]/client-service/_components/_layout/service-layout.content'
import useLocale from 'app/[locale]/_common/hooks/helpers/locale-deprecated/locale.hook'

const useServiceLayout = () => {
    const [transl] = useLocale(clientServiceContent)
    const [modalState, showModal, hideModal] = useModal({menu: false})

    return {modalState, showModal, hideModal, transl}
}

export default useServiceLayout
import {NavMenuProps} from 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.types'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import navMenuContent from 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.content'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'
import {useState} from 'react'
import {useUserStore} from 'app/[locale]/_store/user/user.store'

const useNavMenu = (props: NavMenuProps) => {
    const {showTopModal} = props
    const [transl, content] = useLocale(navMenuContent)
    const [clientService, setClientService] = useState(false)
    const onClientService = () => {
        setClientService(!clientService)
    }

    const onShowModal: MouseAction = (event) => {
        const param = event.currentTarget.getAttribute('name') as keyof ModalState
        showTopModal(param)
    }

    const user = useUserStore(state => state.user)

    return {clientService, onClientService, transl, content, onShowModal, user}
}

export default useNavMenu
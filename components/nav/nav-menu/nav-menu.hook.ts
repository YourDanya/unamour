import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import {selectUser} from 'redux/user/user.selectors'
import {useLocale} from 'hooks/other/other.hooks'
import navMenuContent from 'components/nav/nav-menu/nav-menu.content'
import {useSelector} from 'react-redux'
import {MouseAction} from 'types/types'
import {NavMenuProps} from 'components/nav/nav-menu/nav-menu.types'
import {ModalState} from 'store/modal/modal.types'

const useNavMenu = (props: NavMenuProps) => {
    const {showTopModal} = props
    const [transl, content] = useLocale(navMenuContent)
    const [clientService, onClientService] = useToggle()
    const user = useSelector(selectUser)
    const onShowModal: MouseAction = (event) => {
        const param = event.currentTarget.getAttribute('name') as keyof ModalState
        showTopModal(param)
    }
    return {clientService, onClientService, user, transl, content, onShowModal}
}

export default useNavMenu
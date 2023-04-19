import {NavMenuProps} from 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.types'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useSelector} from 'react-redux'
import {selectUser} from 'app/[locale]/_redux/user/user.selectors'
import {useLocale} from 'app/[locale]/_common/hooks/other/other.hooks'
import navMenuContent from 'app/[locale]/_components/layout/nav/nav-menu/nav-menu.content'
import {ModalState} from 'app/[locale]/_store/modal/modal.types'
import {useState} from 'react'

const useNavMenu = (props: NavMenuProps) => {
    const {showTopModal} = props
    const [transl, content] = useLocale(navMenuContent)
    const [clientService, setClientService] = useState(false)
    const onClientService = () => {
        setClientService(!clientService)
    }

    const user = useSelector(selectUser)
    const onShowModal: MouseAction = (event) => {
        const param = event.currentTarget.getAttribute('name') as keyof ModalState
        showTopModal(param)
    }
    return {clientService, onClientService, user, transl, content, onShowModal}
}

export default useNavMenu
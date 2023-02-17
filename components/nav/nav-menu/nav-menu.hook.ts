import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import {selectUser} from 'redux/user/user.selectors'
import {useLocale} from 'hooks/other/other.hooks'
import navMenuContent from 'components/nav/nav-menu/nav-menu.content'
import {useSelector} from 'react-redux'

const useNavMenu = () => {
    const [transl, content] = useLocale(navMenuContent)
    const [clientService, onClientService] = useToggle()
    const user = useSelector(selectUser)
    return {clientService, onClientService, user, transl, content}
}

export default useNavMenu
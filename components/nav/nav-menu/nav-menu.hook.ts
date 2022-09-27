import {useToggle} from 'hooks/event-handler.hooks'
import {useSelector} from "react-redux"
import {selectUser} from 'redux/user/user.selectors'

const useNavMenu = () => {

    const [clientService, handleClientClick] = useToggle()

    const user = useSelector(selectUser)

    return {clientService, handleClientClick, user}
}

export default useNavMenu
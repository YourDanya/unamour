import {useToggle} from "../../../hooks/event-handler.hooks"

const useNavMenu = () => {
    const [clientService, handleClientClick] = useToggle()

    return {clientService, handleClientClick}
}

export default useNavMenu
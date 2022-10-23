import {useToggle} from 'hooks/event-handler/event-handler.hooks'

const useDropdown = () => {
    const [show, handleClick] = useToggle()

    return {show, handleClick}
}

export default useDropdown
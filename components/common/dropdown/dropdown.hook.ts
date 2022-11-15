import {useToggle} from 'hooks/event-handler/event-handler.hooks'
import {MouseAction} from 'types/types'

const useDropdown = () => {
    const [show, toggleShow] = useToggle()

    const onClick: MouseAction = (event ) => {
        event.preventDefault()
        toggleShow(event)
    }

    return {show, onClick}
}

export default useDropdown
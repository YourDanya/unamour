import {useRouteChange} from 'hooks/other/other.hooks'
import {MouseAction} from 'types/types'

const useModalContent = ( hideModal: (() => void) | undefined) => {
    useRouteChange(hideModal)

    const onHideModal: MouseAction = (event) => {
        event.preventDefault()
        hideModal && hideModal()
    }

    return {onHideModal}
}

export default useModalContent
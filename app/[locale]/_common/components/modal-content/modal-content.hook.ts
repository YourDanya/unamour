import {MouseAction} from 'app/[locale]/_common/types/types'
import {useRouteChange} from 'app/[locale]/_common/hooks/other/other.hooks'

const useModalContent = ( hideModal: (() => void) | undefined) => {
    useRouteChange(hideModal)

    const onHideModal: MouseAction = (event) => {
        event.preventDefault()
        hideModal && hideModal()
    }

    return {onHideModal}
}

export default useModalContent
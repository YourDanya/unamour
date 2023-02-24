import {useRouteChange} from 'hooks/other/other.hooks'

const useModalContent = ( hideModal: (() => void) | undefined) => {
    useRouteChange(hideModal)
}

export default useModalContent
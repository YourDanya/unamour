import {useRouteChange} from 'hooks/other/other.hooks'

const useModalContent = (hideModal: () => void) => {
    useRouteChange(hideModal)
}

export default useModalContent
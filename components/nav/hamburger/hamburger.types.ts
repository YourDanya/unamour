import {ModalState} from 'components/store/modal/modal.types'

export type HamburgerProps = {
    hamburger: boolean,
    showModal: (param: 'hamburger') => void,
    hideModal: () => void
}
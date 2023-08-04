import {ModalState} from 'app/_common/store/modal/modal.types'

export type NavCartProps = {
    showModal: (param: keyof ModalState) => void,
    hideModal: () => void,
    modal: boolean
}
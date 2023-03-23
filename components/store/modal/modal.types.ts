import {MouseAction} from 'types/types'

export type ModalState = {
    hamburger: boolean, search: boolean, shopping: boolean, sign: boolean, modal: boolean
}

export type ModalStore = {
    modalState: ModalState,
    showModal: (modalProp: keyof ModalState & string) => void,
    hideModal: () => void,
    hideTopModal: (modalProp: keyof ModalState) => void
}
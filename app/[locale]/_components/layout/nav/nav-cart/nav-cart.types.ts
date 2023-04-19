import {ModalState} from 'app/[locale]/_store/modal/modal.types'

export type NavCartProps = {
    showModal: (param: keyof ModalState) => void,
    hideModal: () => void,
    modal: boolean
}
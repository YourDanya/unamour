import {ModalState} from 'app/_common/store/modal/modal.types'

export type NavHeaderProps = {
    home: boolean,
    showModal: (param: keyof ModalState) => void
}
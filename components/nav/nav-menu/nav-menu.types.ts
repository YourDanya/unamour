import {ModalState} from 'store/modal/modal.types'

export type NavMenuProps = {
    showTopModal: (param: keyof ModalState) => void
}
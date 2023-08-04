import {ModalState} from 'app/_common/store/modal/modal.types'

export type NavMenuProps = {
    showTopModal: (param: keyof ModalState) => void
}
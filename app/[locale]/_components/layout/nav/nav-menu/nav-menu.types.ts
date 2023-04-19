import {ModalState} from 'app/[locale]/_store/modal/modal.types'

export type NavMenuProps = {
    showTopModal: (param: keyof ModalState) => void
}
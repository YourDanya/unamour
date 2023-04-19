import {ModalState} from 'app/[locale]/_store/modal/modal.types'

export type NavHeaderProps = {
    home: boolean,
    showModal: (param: keyof ModalState) => void
}
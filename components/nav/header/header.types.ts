import {MouseAction} from 'types/types'
import {ModalState} from 'components/store/modal/modal.types'

export type NavHeaderProps = {
    home: boolean,
    showModal: (param: keyof ModalState) => void
}
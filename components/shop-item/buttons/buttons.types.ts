import {MouseAction} from 'types/types'

export type ButtonsProps = {
    activeSize: string | null,
    showModal: MouseAction,
    onAddItem: () => void,
    id: string,
    color: string
}
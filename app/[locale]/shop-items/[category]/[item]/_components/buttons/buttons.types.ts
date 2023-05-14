import {MouseAction} from 'app/[locale]/_common/types/types'

export type ButtonsProps = {
    activeSize: string | null,
    showModal: MouseAction,
    onAddItem: () => void,
    id: string,
    color: string
}
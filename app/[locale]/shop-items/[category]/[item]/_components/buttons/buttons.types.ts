import {MouseAction} from 'app/[locale]/_common/types/types'

export type ButtonsProps = {
    activeSize: string | null,
    showModal: (prop: string) => void,
    onAddItem: () => void,
    id: string,
    color: string
}
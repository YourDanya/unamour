import {MouseEvent} from 'react'

export type UseModal = <K extends string> (initState: Record<K, boolean>, attribute?: string) =>
    [modalState: Record<K, boolean> & Record<'modal', boolean>, showModal: (event: MouseEvent<HTMLElement> | string) => void, closeModal: () => void,
        showTopModal: (event: MouseEvent<HTMLElement>) => void, hideTopModal: (event: MouseEvent<HTMLElement>) => void,]
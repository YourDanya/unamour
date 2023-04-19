import {ReactNode} from 'react'

export type ModalContentProps = {
    active : boolean,
    hideModal?: () => void,
    className?: string,
    hideOnRouteChange?: boolean
    children: ReactNode
}

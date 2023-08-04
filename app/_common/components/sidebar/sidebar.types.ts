import {ReactNode} from 'react'
import {MouseAction} from 'app/_common/types/types'

export type SidebarProps = {
    active: boolean,
    children: ReactNode,
    left?: boolean,
    top?: true,
    hideModal?: MouseAction,
    hideTopModal?: MouseAction,
    name?: string
}

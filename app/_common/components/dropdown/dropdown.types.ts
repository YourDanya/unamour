import {ReactNode} from 'react'

export type DropdownProps = {
    name: string,
    plus?: boolean,
    className?: string,
    children?: ReactNode,
    parentName?: string,
    onClick?: () => void
}

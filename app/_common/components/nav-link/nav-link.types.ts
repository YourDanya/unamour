import {ReactNode} from 'react'

export type NavLinkProps = {
    href: string,
    className?: string,
    activeClassName?: string,
    children: ReactNode
}
import {MouseEvent, ReactNode} from 'react'

export type ButtonProps = {
    onClick: (event: MouseEvent<HTMLElement>) => void,
    className?: string
    name?: string,
    loading?: boolean,
    children?: ReactNode
}
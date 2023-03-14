import {ChangeEvent, ReactNode} from 'react'
import {CSSProperties} from 'react'

export type RadioButtonProps = {
    labels: string[],
    values: string[],
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    active: string,
    name: string,
    className?: string,
    children?: ReactNode,
    styles?: CSSProperties [],
    title?: string,
    error?: string
}

export type RadioLabel = {label: string, node?: ReactNode}
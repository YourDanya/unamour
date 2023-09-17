import {ChangeEvent, ReactNode} from 'react'
import {CSSProperties} from 'react'
import {ChangeValue} from 'app/_common/components/input-v2/input.types'

export type RadioButtonProps<N extends string, V extends string | number> = {
    labels: string[],
    values: string[],
    onChange: (event: ChangeValue<Record<N, V>>) => void,
    active: V,
    name: N,
    className?: string,
    children?: ReactNode,
    styles?: CSSProperties [],
    title?: string,
    error?: string
}

export type RadioLabel = {label: string, node?: ReactNode}
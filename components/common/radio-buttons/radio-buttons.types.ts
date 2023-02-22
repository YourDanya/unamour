import React from 'react'
import {CSSProperties} from 'react'

export type RadioButtonProps = {
    labels: string[],
    values: string[],
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    active: string,
    name: string,
    className?: string,
    children?: React.ReactNode,
    styles?: CSSProperties [],
    title?: string
}

export type RadioLabel = {label: string, node?: React.ReactNode}
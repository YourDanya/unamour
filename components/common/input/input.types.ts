import React from 'react'
import {DependencyList} from 'react'

export type InputProps = {
    placeholder: string
    name: string,
    value: string,
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    error?: string | null,
    type?: string,
    onValidate?: (name: string) => void,
    validateDeps?: DependencyList,
    children?: React.ReactNode
}
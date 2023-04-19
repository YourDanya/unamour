import React from 'react'
import {DependencyList} from 'react'

export type TextareaProps = {
    placeholder: string
    name: string,
    value: string,
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    error?: string | null,
    type?: string,
    onValidate?: (name: string) => void,
    validateDeps?: DependencyList,
    children?: React.ReactNode
}
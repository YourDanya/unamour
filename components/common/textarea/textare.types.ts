import React from 'react'

export type TextareaProps = {
    className?: string,
    name: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLElement>) => void,
    onValidate?: (event: React.ChangeEvent<HTMLElement>) => void,
    value: string
    error?: string | null
}
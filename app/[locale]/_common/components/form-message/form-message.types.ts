import React from 'react'

export type FormMessageProps = {
    success?: string | null,
    error?: string | null,
    className?: string,
    children?: React.ReactNode
}
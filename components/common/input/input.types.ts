import {ChangeEvent} from 'react'
import {DependencyList} from 'react'

export type InputProps = {
    placeholder: string
    name: string,
    value: string,
    className?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    error?: string | null,
    type?: string,
    onValidate?: (name: string) => void,
    validateDeps?: DependencyList,
    onFocus?: () => void,
    onBLur?: () => void
}
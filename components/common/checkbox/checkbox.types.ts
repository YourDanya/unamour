import {ChangeEvent} from 'react'

export type CheckboxProps = {
    label: string,
    value: boolean,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    className?: string,
    styles?: object,
    name?: string
}
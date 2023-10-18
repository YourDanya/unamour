import {Validations} from 'app/_common/hooks/input/input.types'
import {Locale} from 'app/_common/types/types'
import {MutableRefObject} from 'react'

export type ValidateInputParams<T extends string> = {
    validations: Record<T, Validations>, values: Record<T, string | number | boolean>, errors: Record<T,string>,
    locale: Locale, errorCountRef: MutableRefObject<number>, name?: T
}

export type ValidateInputOneParams<T extends string> = ValidateInputParams<T> & {name: T}
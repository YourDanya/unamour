import React from 'react'

export type Value = string | boolean | number | string[]

export type Validations = Record<string, string | boolean | number>

export type InputObj = {
    value: Value,
    validations?: Validations,
    error?: string | null,
}

export type InputsObj = Record<string, InputObj>

export type Inputs <T extends string | number| symbol, K> = {
    values: Record<T, K>,
    errors: Record<T, string | null>,
}

export type ValidationInputs <T extends string | number | symbol, > = {
    values: Record<T, Value>,
    errors: Record<T, string | null>,
    validations: Record<T, Validations>
}

export type Values = Record<string, Value>

export type TranslInputs = Record<string, string>

export type ValidationInput = {
    value: Value,
    validations: Validations,
    values? : Values,
    translInputs?: TranslInputs,
    name: string
}

export type UseInput = <T extends InputsObj> (inputsObj: T, translInputs?: Record<keyof T, string>) => {
    inputs: {values: {[K in keyof T]: T[K]['value']}, errors: Record<keyof T, string | null>},
    setOuterValues: (values: {[K in keyof T]: T[K]['value']}) => void,
    setOuterErrors: (errors: {[K in keyof T]: string | null}) => void,
    handleChange: (event: React.ChangeEvent<HTMLElement>) => void,
    handleValidate: (event: any) => void,
    resetValues: () => void,
    errRef: React.MutableRefObject<{ errors: Record<keyof T, string | null>, count: number }>,
    setReqErrors: () => void,
    withSubmit: (callback: () => void) => (event: React.MouseEvent<HTMLElement>) => void
}

export type ErrRef <T,> = {errors : T, count: number}
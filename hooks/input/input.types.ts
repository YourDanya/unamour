import React from 'react'
import {MutableRefObject} from 'react'

export type Value = string | boolean | number

export type Validations = Record<string, string | boolean | number>

export type InputObj = {
    value?: Value,
    validations?: Validations,
    error?: string | null,
}

export type InputsObj = Record<string, InputObj>

export type ValidationInputs <T extends string | number | symbol, > = {
    values: Record<T, Value>,
    errors: Record<T, string | null>,
    validations: Record<T, Validations>
}

export type Values = Record<string, Value>

export type TranslInputs = Record<string | number | symbol, string>

export type ValidationInput = {
    value: Value,
    validations: Validations,
    values? : Values,
    translInputs?: TranslInputs,
    name: string | number | symbol
}

export type UseInputInputs<T extends InputsObj> = {values: {[K in keyof T]: T[K]['value']}, errors: Record<keyof T, string | null>}

export type UseInput = <T extends InputsObj> (inputsObj: T, translInputs?: Record<keyof T, string>) => {
    inputs: {values: {[K in keyof T]: T[K]['value']}, errors: Record<keyof T, string | null>},
    setOuterValues: (values: {[K in keyof T]?: T[K]['value']}) => void,
    setOuterErrors: (errors: {[K in keyof T]: string | null}) => void,
    onChange: (event: React.ChangeEvent<HTMLElement>) => void,
    onValidate: (event: any) => void,
    resetValues: () => void,
    errRef: React.MutableRefObject<{ errors: Record<keyof T, string | null>, count: number }>,
    setReqErrors: () => void,
    withSubmit: (callback: () => void) => (event: React.MouseEvent<HTMLElement>) => void
}


import {ChangeEvent, MutableRefObject} from "react"

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

export type Errors <T extends string > = {
    errors: Record<T, string>
}

export type Values  <T extends string > = {
    values: Record<T, string>
}

export type ValidationInput = {
    value: Value,
    validations: Validations
}

export type UseInput = <T extends InputsObj,> (inputsObj: T) => [
    inputs: Inputs<keyof T,  T[keyof T]['value']>,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
    handleValidate: (event: any) => void,
    resetValues: () => void,
    errRef: MutableRefObject<{errors: Record<keyof T, string | null>, count: number}>,
    setInputs: (inputs: Inputs<keyof T, Pick<T[keyof T], 'value'>>) => void,
    // handleValidateAll: (event: MouseEvent<HTMLInputElement>) => void,
]
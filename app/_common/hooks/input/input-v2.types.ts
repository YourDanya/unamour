import {MutableRefObject} from 'react'
import {ChangeEvent} from 'react'
import {Validations} from 'app/_common/hooks/input/input.types'
import {InputsObj} from 'app/_common/hooks/input/input.types'

export type UseValidateInput = <T extends string>( params: {
    validations: Record<T, Validations>,
    errors: Record<T, string>,
    validateCallback?: (errors: Record<T, string>) => void,
}) => {
    onValidate: (name: T, value: InputValue) => void,
    errRef: MutableRefObject<{ errors: Record<T, string>, count: number }>
}

export type Errors<T extends object> = {[key in keyof T]: boolean}

export type OnValidate<NameT extends string> = (name: NameT, value: InputValue) => void

export type UseMapInputs = <T extends InputsObj> (inputsObj: T) => InputsMap<T>

export type InputsMap<InputsObjT extends InputsObj> = {
    validations: { [Key in keyof InputsObjT]: InputsObjT[Key]['validations'] },
    values: { [Key in keyof InputsObjT]: InputsObjT[Key]['value'] },
    errors: Record<keyof InputsObjT, string>
}

export type InputValue = string | boolean | number

export type InputValues = Record<string, InputValue>

export type ChangeCallback<ValuesT> = (params: {changeValues: ValuesT, name: keyof ValuesT}) => void

export type UseInputChange = <ValuesT extends InputValues>(params: {
    values: ValuesT,
    changeCallback: ChangeCallback<ValuesT>
}) => {
    onChange: (event: ChangeEvent<HTMLElement>) => void,
    valuesRef: MutableRefObject<ValuesT>
}
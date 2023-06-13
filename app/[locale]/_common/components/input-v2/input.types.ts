
export type InputProps<N extends string, V extends string | number> = {
    name: N,
    error?: string,
    placeholder?: string,
    label?: string,
    type?: string,
    className: string,
    value: V,
    onChange: (value: ChangeValue<Record<N, V>>) => void
}

export type InputEvent = {
    target: {name: string, value: string}
}

export type ChangeValue<T extends InputValues> = {[key in keyof T] : {name: key, value: T[key]}} [keyof T]

export type InputValues = Record<string, string | number>
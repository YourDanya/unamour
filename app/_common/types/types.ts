import {MouseEvent} from 'react'

export type ElementContent = Record<string, string | string[] | object | object[]>

export type Locale = 'ua' | 'eng' | 'ru'

export type RequireAllIfOne<TRequiredAlways, TRequiredIfOne> =
    (TRequiredAlways & TRequiredIfOne) | (Partial<Record<keyof TRequiredIfOne, never>> & TRequiredAlways)

export type MouseAction = (event: MouseEvent<HTMLElement | SVGSVGElement>) => void

export type Mapped<T> = { [key in keyof T]: T[key] }

export type Entry<T> = {
    [key in keyof Required<T>]: [key, T[key]]
}[keyof T]

export type ServerError = { code: string, message: string, timer?: number }

export type Color = {
    code: string,
    slug: string,
}

export type ApiCallRes = { loading: boolean, error: ServerError | null, success: boolean }
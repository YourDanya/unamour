import {ReactNode} from 'react'
import {NextPage} from 'next'
import {ReactElement} from 'react'
import {AppProps} from 'next/app'
import {MouseEvent} from 'react'
import {User} from 'app/[locale]/_store/user/user.types'

export type NextPageWithLayout<P = {}
    // extends ComponentContent = {} & ComponentContent
    , IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode,
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type ElementContent = Record<string, string | string[] | object | object[]>

export type InternContent = { ua: ElementContent, eng: ElementContent, ru: ElementContent }

export type ComponentContent = { content: ElementContent }

export type Locale = 'ua' | 'eng' | 'ru'

export type RequireAllIfOne<TRequiredAlways, TRequiredIfOne> =
    (TRequiredAlways & TRequiredIfOne) | (Partial<Record<keyof TRequiredIfOne, never>> & TRequiredAlways)

export type MouseAction = (event: MouseEvent<HTMLElement | SVGSVGElement>) => void

export type Mapped<T> = { [key in keyof T]: T[key] }

export type Entry<T> = {
    [key in keyof Required<T>]: [key, T[key]]
}[keyof T]

export type Localize<T> = { [key in keyof T as `${Locale}${Capitalize<keyof T & string>}`]: { value: T[key] } }

export type ServerError = { code: string, message: string, timer?: number }

export type Color = {
    code: string,
    slug: string,
}

export type FetchedItem = {
    _id: string,
    updateTime: string,
    deleted: boolean,
    common: {
        volume: number,
        weight: number
        slug: string,
        slugCategory: string,
        best: boolean,
        special: boolean,
        wedding: boolean,
        coming: boolean,
        oldPrice: string,
        variants: {
            color: string,
            sizes: string[],
            images: { path: string, url: string }[],
            price: string,
            _id: string
        }[]
    },
    translations: {
        ua: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string
        },
        eng: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string
        },
        ru: {
            name: string,
            category: string,
            description: string,
            composition: string,
            parameters: string,
            delivery: string,
            // currency: string,
        }
    }
}

export type CategoryItem = {
    _id: string,
    common: {
        slug: string,
        slugCategory: string,
        images: { path: string, url: string }[],
        sizes: string[]
        price: string,
        oldPrice: string
        color: string,
    }
    translations: {
        ua: {
            name: string
        },
        eng: {
            name: string
        },
        ru: {
            name: string
        }
    }
}

export type ApiCallRes = { loading: boolean, error: ServerError | null, success: boolean }

export type Review = {
    color: string,
    itemId: string,
    title: string,
    review: string,
    date: string,
    images: {
        path: string,
        url: string
    }[],
    status: 'pending' | 'confirmed',
    rating: number,
    user: {
        name: string,
        _id: string
    }
}

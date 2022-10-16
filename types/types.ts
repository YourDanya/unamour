import {ReactNode} from 'react'
import {NextPage} from 'next'
import {ReactElement} from 'react'
import {AppProps} from 'next/app'

export type NextPageWithLayout<P ={}
    // extends ComponentContent = {} & ComponentContent
    , IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode,
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type ElementContent =  Record<string, string | string[] | object | object[]>

export type InternContent = {ua: ElementContent, eng: ElementContent, ru: ElementContent}

export type ComponentContent = {content: ElementContent}

export type Locale = 'ua' | 'eng' | 'ru'

export type RequireAllIfOne<TRequiredAlways, TRequiredIfOne> =
    (TRequiredAlways & TRequiredIfOne) | (Partial<Record<keyof TRequiredIfOne, never>> & TRequiredAlways)


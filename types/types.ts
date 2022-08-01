import {NextPage} from "next";
import React, {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";

export type NextPageWithLayout<P ={}
    // extends ComponentContent = {} & ComponentContent
    , IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode,
}

export type ComponentWithLayout<P = {} , IP = P> = React.FC<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type ElementContent =  Record<string, string | string[] | Object | Object[] >

export type InternContent = {ua: ElementContent, eng: ElementContent, ru: ElementContent}

export type ComponentContent = {content: ElementContent}

export type DeliveryType = {value: string, label: {title: string, price: string, duration: string}}

export type LocaleType = 'ua' | 'eng' | 'ru'

export type InputTypes = {
    [prop: string]: InputType
}

export type InputType = {
    value: string | boolean | number | string[],
    validations?: { [validation: string]: string | boolean | number },
    error?: string,
    label?: string
}

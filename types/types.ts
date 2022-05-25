import {NextPage} from "next";
import React, {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";

export type NextPageWithLayout<P extends ComponentContent = {} & ComponentContent , IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode,
}

export type ComponentWithLayout<P = {} , IP = P> = React.FC<P> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type ElementContent =  Record<string, string | string[] | { ref: string, text: string }>

export type InternContent = {ua: ElementContent, eng: ElementContent, ru: ElementContent}

export type ComponentContent = {content: ElementContent}




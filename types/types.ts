import {NextPage} from "next";
import React, {ReactElement, ReactNode} from "react";
import {AppProps} from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type InternEssence<P={}, IP=P>=(NextPageWithLayout<P, IP> | NextPage<P, IP> | React.FC<P>)

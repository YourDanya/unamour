import React from "react";
import {InternContent, NextPageWithLayout, ElementContent, ComponentContent} from "../../../types/types";
import {useRouter} from "next/router";

const WithIntern= <P, C>  (Component : React.FC<P> | NextPageWithLayout<P>, content: InternContent)  => {

    const InternComp: React.FC<Omit<P, 'content'>> | NextPageWithLayout<Omit<P, 'content'>> = (props) => {
        const router = useRouter()
        const componentContent = content[router.locale as keyof typeof content] as typeof content.ua
        // for (let prop in props) {
        //     if (typeof prop === 'object' && 'ua' in prop) {
        //
        //     }
        // }
        return <Component {...props as P} content={componentContent}/>
    }

    const isNextPageWithLayout = <T,> (component: React.FC<T> | NextPageWithLayout<T>): component is NextPageWithLayout<T> => {
        return (component as NextPageWithLayout).getLayout !== undefined;
    }

    if (isNextPageWithLayout(Component)) (InternComp as NextPageWithLayout).getLayout =  Component.getLayout

    return InternComp
}


export default WithIntern
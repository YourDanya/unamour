import React from "react";
import {InternContent, NextPageWithLayout, ElementContent, ComponentContent} from "../../../types/types";
import {useRouter} from "next/router";

const WithIntern= <P,>  (Component : React.FC<P & ComponentContent> | NextPageWithLayout<P & ComponentContent>, content: InternContent)  => {

    const InternComp: React.FC<P> | NextPageWithLayout<P> = (props) => {
        const router = useRouter()
        const componentContent = content[router.locale as keyof typeof content] as ElementContent

        return <Component {...props} content={componentContent}/>
    }

    const isNextPageWithLayout = <T,> (component: React.FC<T> | NextPageWithLayout<T>): component is NextPageWithLayout<T> => {
        return (component as NextPageWithLayout).getLayout !== undefined;
    }

    if (isNextPageWithLayout(Component) && isNextPageWithLayout(InternComp)) InternComp.getLayout =  Component.getLayout

    return InternComp
}


export default WithIntern
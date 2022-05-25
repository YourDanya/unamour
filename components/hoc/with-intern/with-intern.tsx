import React from "react";
import {InternContent, NextPageWithLayout, ElementContent, ComponentContent} from "../../../types/types";
import {useRouter} from "next/router";

const WithIntern= <P,>  (Component : NextPageWithLayout<P & ComponentContent>, content: InternContent)  => {

    const InternComp: NextPageWithLayout<P & ComponentContent> = (props) => {
        const router = useRouter()
        const componentContent = content[router.locale as keyof typeof content] as ElementContent

        console.log('with intern')
        return <Component {...props} content={componentContent}/>
    }

    if ('getLayout' in Component) InternComp.getLayout =  Component.getLayout

    return InternComp
}


export default WithIntern
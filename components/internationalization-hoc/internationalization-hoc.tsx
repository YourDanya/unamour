import React from "react";
import {InternEssence} from "../../types/types";
import {useRouter} from "next/router";

type WithInternProps ={
    Component: InternEssence, content: object
}

const WithIntern= <P extends {content: object},>  (Component : InternEssence<P>, content: object)  => {

    const InternComp= (props: P) => {

        const router = useRouter()

        const componentContent = content[router.locale as keyof typeof content]

        return <Component {...props} content={componentContent}/>
    }

    if ('getLayout' in Component) InternComp.getLayout = Component.getLayout

    return InternComp
}


export default WithIntern
import React from "react";
import {InternEssence} from "../../types/types";
import {useRouter} from "next/router";

type InternHocProps ={
    Component: InternEssence, content: object
}

const InternHoc= <P extends {content: object},>  (Component : InternEssence<P>, content: object)  => {

    return (props: P) => {
        const router = useRouter()
        console.log(router)
        return <Component {...props}/>
    }
}


export default InternHoc
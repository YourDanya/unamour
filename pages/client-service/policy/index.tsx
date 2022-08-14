import React, {} from "react"
import {getClientServiceLayout} from "../../../components/client-service/service.component"
import {NextPageWithLayout} from "../../../types/types"
import usePolicy from "./policy.hook";

const Policy: NextPageWithLayout = () => {

    const {children} = usePolicy()

    return (
        <div className={'policy'}>
            {children}
        </div>
    )
}

Policy.getLayout = getClientServiceLayout

export default Policy
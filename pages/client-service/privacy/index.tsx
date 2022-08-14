import React from "react"
import {getClientServiceLayout} from "../../../components/client-service/service.component"
import { NextPageWithLayout} from "../../../types/types"
import usePrivacy from "./privacy.hook";

const Privacy: NextPageWithLayout = () => {

    const {children} = usePrivacy()

    return (
        <div className={'privacy'}>
            {children}
        </div>
    )
}

Privacy.getLayout = getClientServiceLayout

export default Privacy
import React, {ReactNode} from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import {ComponentContent, NextPageWithLayout} from "../../../types/types";
import {PolicyContent} from "./policy.content";
import WithIntern from "../../../components/hoc/with-intern/with-intern";
import WithService from "../../../components/hoc/with-service/with-service";

type PolicyProps = {
}

const Policy: NextPageWithLayout = ({children}) => {

    return (
        <div className={'policy'}>
            {children}
        </div>
    )
}

Policy.getLayout = getClientServiceLayout

export default WithIntern(WithService(Policy), PolicyContent)
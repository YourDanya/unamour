import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import WithIntern from "../../../components/hoc/with-intern/with-intern";
import {PrivacyContent} from "./privacy.content";
import { NextPageWithLayout} from "../../../types/types";
import WithService from "../../../components/hoc/with-service/with-service";

const Privacy: NextPageWithLayout = ({children }) => {

    return (
        <div className={'privacy'}>
            {children}
        </div>
    )
}

Privacy.getLayout = getClientServiceLayout

export default WithIntern(WithService(Privacy), PrivacyContent)
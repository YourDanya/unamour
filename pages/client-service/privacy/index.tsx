import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getClientServiceLayout} from 'components/client-service/service.component'
import usePrivacy from 'pages/client-service/privacy/privacy.hook'

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
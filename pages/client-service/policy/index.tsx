import React from 'react'
import {NextPageWithLayout} from 'types/types'
import {getClientServiceLayout} from 'components/client-service/service.component'
import usePolicy from 'pages/client-service/policy/policy.hook'

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
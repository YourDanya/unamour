import {ReactNode} from 'react'
import ServiceLayout from 'app/[locale]/client-service/_components/_layout/service-layout.component'

const Layout = ({children}: { children: ReactNode }) => {

    return (
        <ServiceLayout>
            {children}
        </ServiceLayout>
    )
}

export default Layout
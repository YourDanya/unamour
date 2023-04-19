import {ReactNode} from 'react'
import ProfileLayout from 'app/[locale]/profile/_components/_layout/layout.component'

const Layout = ({children}: {children: ReactNode}) => {
    return (
        <ProfileLayout>
            {children}
        </ProfileLayout>
    )
}

export default Layout
import {ReactNode} from 'react'
import {Metadata} from 'next/dist/lib/metadata/types/metadata-interface'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import Nav from 'app/[locale]/_components/layout/nav/nav.component'
import Footer from 'app/[locale]/_components/layout/footer/footer.component'
import PreWork from 'app/[locale]/_components/layout/pre-work/pre-work.component'
import RootLayout from 'app/[locale]/_components/layout/layout.component'
import 'app/[locale]/_common/styles/global.sass'
import {LayoutProps} from 'app/[locale]/layout.types'

export const metadata: Metadata = {
    title: 'UNAMOUR',
    metadataBase: new URL(`${baseURL}`),
    description: 'Магазин UNAMOUR',
    viewport: 'width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
}

const Layout = (props: LayoutProps) => {
    const {children, params: {locale}} = props

    return (
        <RootLayout locale={locale}>
            {children}
        </RootLayout>
    )
}

export default Layout
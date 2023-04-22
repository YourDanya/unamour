'use client'

import {ReactNode} from 'react'
import {LayoutProps} from 'app/[locale]/_components/layout/layout.types'
import {useLayout} from 'app/[locale]/_components/layout/layout.hook'
import {UrlContext} from 'app/[locale]/_store/url/url.store'
import Nav from 'app/[locale]/_components/layout/nav/nav.component'
import PreWork from 'app/[locale]/_components/layout/pre-work/pre-work.component'
import Footer from 'app/[locale]/_components/layout/footer/footer.component'

const Layout = (props: LayoutProps) => {
    const {children} = props
    const {storeRef} = useLayout(props)

    return (
        <html>
        <head/>
        <body>
        <PreWork/>
        <Nav/>
        <div className={'page'}>
            <UrlContext.Provider value={storeRef.current}>
                {children}
            </UrlContext.Provider>
        </div>
        <Footer/>
        </body>
        </html>
    )
}

export default Layout

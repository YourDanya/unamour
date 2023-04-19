'use client'

import {ReactNode} from 'react'
import {LayoutProps} from 'app/[locale]/_components/layout/layout.types'
import {useLayout} from 'app/[locale]/_components/layout/layout.hook'
import {UrlContext} from 'app/[locale]/_store/url/url.store'

const Layout = (props: LayoutProps) => {
    const {children} = props
    const {storeRef} = useLayout(props)

    return (
        <html>
        <head/>
        <body>
        {/*<PreWork/>*/}
        {/*<Nav/>*/}
        <div className={'page'}>
            <UrlContext.Provider value={storeRef.current}>
                {children}
            </UrlContext.Provider>
        </div>
        {/*<Footer/>*/}
        </body>
        </html>
    )
}

export default Layout

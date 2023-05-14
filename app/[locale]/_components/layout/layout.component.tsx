'use client'

import {ReactNode} from 'react'
import {LayoutProps} from 'app/[locale]/_components/layout/layout.types'
import {useLayout} from 'app/[locale]/_components/layout/layout.hook'
import {UrlContext} from 'app/[locale]/_store/url/url.store'
import Nav from 'app/[locale]/_components/layout/nav/nav.component'
import PreWork from 'app/[locale]/_components/layout/pre-work/pre-work.component'
import Footer from 'app/[locale]/_components/layout/footer/footer.component'
import localFont from '@next/font/local'

const sesonsRegular = localFont({
    src: './../../../../public/fonts/SeasonsRegular.ttf',
    variable: '--season-regular',
    preload: true
})

const Layout = (props: LayoutProps) => {
    const {children} = props
    const {storeRef} = useLayout(props)

    return (
        <html>
        <head/>
        <body>
        <style jsx global>{`
          :root {
            --seasons-regular: ${sesonsRegular.style.fontFamily};
          }
        `}</style>
        <UrlContext.Provider value={storeRef.current}>
            <PreWork/>
            <Nav/>
            <div className={'page'}>
                {children}
            </div>
            <Footer/>
        </UrlContext.Provider>
        </body>
        </html>
    )
}

export default Layout

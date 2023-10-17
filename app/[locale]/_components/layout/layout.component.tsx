'use client'

import {LayoutProps} from 'app/[locale]/_components/layout/layout.types'
import Nav from 'app/[locale]/_components/layout/nav/nav.component'
import PreWork from 'app/[locale]/_components/layout/pre-work/pre-work.component'
import Footer from 'app/[locale]/_components/layout/footer/footer.component'
import localFont from 'next/font/local'
export const seasonsRegular = localFont({
    src: './../../../../public/fonts/SeasonsRegular.ttf',
    variable: '--season-regular',
    preload: true
})

const Layout = (props: LayoutProps) => {
    const {children} = props

    return (
        <html>
        <head/>
        <body>
        <style jsx global>{`
          :root {
            --seasons-regular: ${seasonsRegular.style.fontFamily};
          }
        `}</style>
        <PreWork/>
        <Nav/>
        <div className={'page'}>
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    )
}

export default Layout

import {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'

const locales = ['ua', 'eng', 'ru']

export function middleware (request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const searchUrl = request.nextUrl.search.replaceAll('%2C', ',')

    const shouldRedirect = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (shouldRedirect) {
        const language = request.headers.get('accept-language') as string

        let locale
        if (language.includes('ua') || language.includes('ru')) {
            locale = 'ua'
        } else {
            locale = 'eng'
        }

        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}${searchUrl}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}
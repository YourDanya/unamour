import {ReactNode} from 'react'
import {Metadata} from 'next/dist/lib/metadata/types/metadata-interface'
import {baseURL} from 'utils/api/api.utils'

export const metadata: Metadata = {
    title: 'UNAMOUR',
    metadataBase: new URL(`${baseURL}`)
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html>
        <head/>
        <body>{children}</body>
        </html>
    )
}

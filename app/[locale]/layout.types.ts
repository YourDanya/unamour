import {ReactNode} from 'react'
import {Locale} from 'app/[locale]/_common/types/types'

export type LayoutProps = {
    children: ReactNode,
    params: { locale: Locale }
}
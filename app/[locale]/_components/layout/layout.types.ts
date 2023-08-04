import {ReactNode} from 'react'
import {Locale} from 'app/_common/types/types'

export type LayoutProps = {
    locale: Locale,
    children: ReactNode
}
import {MutableRefObject} from "react"
import React from 'react'

export type LayoutProps = {
    children?: React.ReactNode
}

import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
export type FilterProps = ReturnType<typeof useLayout>

export type FilterValues = {
    sort: string,
    color: Record<string, boolean>,
    size: Record<string, boolean>,
    price: {min: string, max: string}
}

import {ReactNode} from 'react'
import {CategoryItem} from 'redux/shop-items/shop-items.types'

export type MapDelivery = (labels: {title: string, price: string, duration: string}[]) =>
    {label: string, node: ReactNode} []

export type FilterItems = (items: CategoryItem[], filters: Record<string, string>) => CategoryItem[]
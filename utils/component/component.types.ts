import {ReactNode} from 'react'

export type MapDelivery = (labels: {title: string, price: string, duration: string}[]) =>
    {label: string, node: ReactNode} []
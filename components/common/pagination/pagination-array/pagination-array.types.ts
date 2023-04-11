import {ReactNode} from 'react'
import {FC} from 'react'

export type PaginationArrayProps = {
    // children?: ReactNode,
    perPage?: number,
    className?: string,
    arr: any[]
    Component: FC<any>
}
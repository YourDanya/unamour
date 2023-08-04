import {ReactNode} from 'react'

export type UseMapArrToNode = (nodeArr: NodeObj) => ReactNode

export type NodeObj = {
    type: string,
    attributes?: {
        className?: string,
        style?: StyleSheet,
    }
    children?: NodeObj[],
    value?: string
    node?: ReactNode
    count?: number,
    test?: string
}
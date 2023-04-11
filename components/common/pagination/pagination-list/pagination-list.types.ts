import {FC} from 'react'
import {DoubleNode} from 'utils/main/main.types'
import {MutableRefObject} from 'react'

export type ListPaginationProps = {
    Component: FC,
    list: DoubleNode<any>,
    lastNode: MutableRefObject<DoubleNode<any>>,
    perPage: number,
    pagesNumber: number
}
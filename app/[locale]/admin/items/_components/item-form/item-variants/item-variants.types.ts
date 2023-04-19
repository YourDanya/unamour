import {MutableRefObject} from 'react'
import {FetchedItem} from 'app/[locale]/_redux/shop-items/shop-items.types'
import {DoubleNode} from 'app/[locale]/_common/utils/main/main.types'

export type ItemVariantsProps = {}

export type ItemNode = DoubleNode<FetchedItem>
import {FetchedItem} from 'app/_common/types/fetched-item'
import {ItemPreviewStyles} from 'app/[locale]/admin/items/_components/admin-items.types'

export type ItemPreviewProps = {
    item: FetchedItem,
    itemIndex: number,
    onUpdate: (itemIndex: number) => void,
    onDelete: (itemIndex: number) => void,
    style: ItemPreviewStyles
}
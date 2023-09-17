import {FetchedItem} from 'app/_common/types/fetched-item'

export type ItemPreviewProps = {
    item: FetchedItem,
    itemIndex: number,
    onUpdate: (itemIndex: number) => void,
    onDelete: (itemIndex: number) => void
}
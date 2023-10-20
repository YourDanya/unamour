import {AdminItem} from 'app/_common/types/admin-item'

export type ItemVariant = { color: string, sizes: string[], images: {path: string, url: string}[], price: number, _id: string}

export type ItemFormProps = {
    action: 'update' | 'delete',
    item: AdminItem,
    itemIndex: number
}

export type NewImageValue = {file: File, url: string}

export type FormImageValue = {url: string, file?: File, path?: string}
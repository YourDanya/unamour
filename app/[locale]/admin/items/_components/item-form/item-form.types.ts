import {AdminItem} from 'app/[locale]/admin/items/_components/store/admin-items.types'

export type ItemFormProps = {
    data: AdminItem,
    className?: string,
    toAddItem?: boolean,
    itemIndex: number
}

export type ItemVariant = { color: string, sizes: string[], images: {path: string, url: string}[], price: number, _id: string}

export type ItemImagesValues = Record<string, {file: File | null, url: string}> []

export type ItemImagesMap = Record<string, {color: string, file: File | null}>
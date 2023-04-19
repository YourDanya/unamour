import {ReactNode} from 'react'

export type ShopItemsPageProps = {
    params: { category: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
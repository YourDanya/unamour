import {ReactNode} from 'react'

export type ShopItemsPageProps = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
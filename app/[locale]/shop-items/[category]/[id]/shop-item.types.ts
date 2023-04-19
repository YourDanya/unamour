export type ShopItemPageProps = {
    params: { id: string, category: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
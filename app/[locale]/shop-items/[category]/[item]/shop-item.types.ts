export type ShopItemPageProps = {
    params: { item: string, category: string }
    searchParams: { [key: string]: string | string[] | undefined }
}
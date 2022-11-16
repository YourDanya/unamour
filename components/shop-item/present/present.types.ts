export type PresentProps = {
    price: number,
    name: string,
    images: string[],
    activeSize: string,
    color: object & { code: string }
}
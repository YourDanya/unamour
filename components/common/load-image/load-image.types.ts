export type LoadImageProps = {
    src: string,
    alt: string,
    className?: string,
    loaded?: boolean,
    dataAttr?: string,
    handleLoaded?: (event: any) => void
}
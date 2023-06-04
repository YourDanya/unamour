export type ItemImageProps = {
    id: string,
    onUpdateImage: (id: string) => void,
    onDeleteImage: (id: string) => void,
    file: File | null,
    url: string | undefined
}
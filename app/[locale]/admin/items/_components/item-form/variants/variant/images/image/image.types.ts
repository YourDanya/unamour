export type ItemImageProps = {
    index: number,
    onUpdateImage: (index: number) => void,
    onDeleteImage: (index: number) => void,
    file: File | undefined,
    url: string,
    timeStamp: number
}
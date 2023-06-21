import {MutableRefObject} from 'react'
import {Dispatch} from 'react'
import {SetStateAction} from 'react'

export type FileCallback = (files: File[]) => File[]

export type PhotosProps = {
    inputRef: MutableRefObject<HTMLInputElement | null>,
    url?: string,
    setPhotos: Dispatch<SetStateAction<File[]>>,
    photos: File[]
}
import {MutableRefObject} from 'react'
import {CSSProperties} from 'react'
import {ImageProps} from 'next/image'

export type LoadImageProps = ImageProps & {elemRef?: MutableRefObject<HTMLImageElement>}
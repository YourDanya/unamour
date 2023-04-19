import {MutableRefObject} from 'react'

export type UseLocale = <T, K>
(content: { translations: { ua: T, eng: T, ru: T }, common?: K }) => K extends undefined ?
   [translations: T] : [translations: T, content: K]

export type UseMemoizeObject = <T> (object: T) => T

export type UseGetParamForImages = (ratio?: number, ...deps: any []) =>
    {width: number, height: number, elemRef: MutableRefObject<HTMLDivElement | null>}

import {ElementContent, Locale} from 'types/types'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'
import {UseGetParamForImages} from 'hooks/other/other.types'
import {useState} from 'react'
import {UseLocale} from 'hooks/other/other.types'
import {useLayoutEffect} from 'react'
import {UseMemoizeObject} from 'hooks/other/other.types'
import {useRef} from 'react'
import {checkEqual} from 'utils/main/main.utils'
import {useMemo} from 'react'

export const useServiceMap = <T extends ElementContent, >(content: T) => {
    const arr = Object.entries(content)

    let count1 = -1
    let count2 = 0
    let tempElem: JSX.Element

    const ending = useRouter().pathname.split('/').pop()

    return arr.map(([key, value], index) => {
        let returnElem
        let className: string = ''
        const prop = key as string
        if (prop.startsWith('textLink') || prop.startsWith('link')) {
            const {text, ref} = value as { text: string, ref: string }
            const textLink = prop.startsWith('textLink')
            const {props: {className, children}} = tempElem as JSX.Element
            returnElem = (
                <Link href={ref} className={`service__link ${textLink ? 'service__link--text' : ''}`}>
                    {text}
                </Link>
            )
            if (textLink) {
                returnElem = (
                    <div className={className}>
                        {children} {returnElem}
                    </div>
                )
            }
        } else if (prop.startsWith('list') || prop.startsWith('numList')) {

            if (prop.startsWith('list')) className = 'list service__list'
            if (prop.startsWith('numList')) className = 'list list--decimal service__list'

            returnElem = (
                <ul className={className} key={prop}>
                    {(value as string[]).map((item: string, index) => (
                        <li className={'list__item'} key={item + index}>
                            {item}
                        </li>
                    ))}
                </ul>
            )
        } else {

            let baseClassName: string = ''

            if (prop.startsWith('title')) baseClassName = 'service__title'
            if (prop.startsWith('numSubtitle' || 'subtitle')) baseClassName = 'service__subtitle'
            if (prop.startsWith('label')) className = 'service__label'
            if (prop.startsWith('text') || prop.startsWith('numText') || prop.startsWith('numText')) baseClassName = 'service__text'

            className=baseClassName
            if (index===1) className +=` ${baseClassName}--first`
            if (index < arr.length - 1 && arr[index + 1][0].startsWith('list')) className += ` ${baseClassName}--list`
            if (index===arr.length - 1 || index===arr.length - 2 && arr[index+1][0].startsWith('textLink')) className += ` ${baseClassName}--last`
            className +=` ${baseClassName}--${ending}`

            returnElem = (
                <div className={className} key={prop}>
                    <>
                        {prop.startsWith('numSubtitle') && count1 >= 0 && `${count1 + 1}. `}
                        {prop.startsWith('numText') && `${count1}.${count2}. `}
                        {value}
                    </>
                </div>
            )

            if (prop.startsWith('numSubtitle')) {
                count1++
                count2 = 1
            }
            if (prop.startsWith('numText')) {
                count2++
            }
            if (index < arr.length - 1 && arr[index + 1][0].startsWith('textLink')) {
                tempElem = returnElem
                returnElem = null
            }
        }

        return returnElem
    })
}

export const useRouteChange = (callback: (() => void) | undefined) => {
    const path = useRouter().asPath

    useOmitFirstEffect(() => {
        if (callback) {
            callback()
        }
    }, [path])
}

export const useMatchUrl = (url: string): [match: boolean] => {
    return [useRouter().pathname === url]
}

export const useLocale: UseLocale = ((content) => {
    const locale = useRouter().locale as Locale
    const {translations, common} = content
    return common? [translations[locale], common] : [translations[locale]]
}) as UseLocale

export const useGetParamForImages: UseGetParamForImages = (ratio = 4 / 3, ...deps) => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    
    // useLayoutResizeObserve(() => {
    //     const width = elemRef.current?.getBoundingClientRect().width as number
    //     setWidth(width)
    //     setHeight(width * ratio)
    // })

    const calcParams = () => {
        const width = elemRef.current?.getBoundingClientRect().width as number
        setWidth(width)
        setHeight(width * ratio)
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', calcParams)
        return () => {
            window.removeEventListener('resize', calcParams)
        }
    }, [])

    useLayoutEffect(() => {
        calcParams()
    }, [deps])

    const elemRef = useRef<HTMLDivElement>(null)

    return {width, height, elemRef}
}

export const useMemoizeObject: UseMemoizeObject = (obj) => {
    const objRef = useRef<typeof obj>(null as typeof obj)
    const updateRef = useRef<Date>()
    let update

    if (!checkEqual(objRef.current, obj)) {
        updateRef.current = new Date()
        update = updateRef.current
        objRef.current = obj
    } else {
        update = updateRef.current
    }

    return useMemo(() => (JSON.parse(JSON.stringify(obj))), [update])
}
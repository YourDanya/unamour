import {ElementContent, Locale} from 'types/types'
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import Link from 'next/link'
import {UseLocale} from 'hooks/other/other.types'

export const useServiceMap = <T extends ElementContent, >(content: T) => {
    const arr = Object.entries(content)

    let count1 = -1
    let count2 = 0
    let tempElem: JSX.Element

    const ending = useRouter().pathname.split('/').pop()

    return arr.map(([prop, value], index) => {
        let returnElem
        let className: string = ''

        if (prop.startsWith('textLink') || prop.startsWith('link')) {
            const {text, ref} = value as { text: string, ref: string }
            const textLink = prop.startsWith('textLink')
            const {props: {className, children}} = tempElem as JSX.Element
            returnElem = (
                <Link href={ref}>
                    <a className={`service__link ${textLink ? 'service__link--text' : ''}`}>
                        {text}
                    </a>
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

export const useRouteChange = (callback: () => void) => {
    const path = useRouter().asPath

    useEffect(() => {
        callback()
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


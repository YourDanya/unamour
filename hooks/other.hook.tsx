import Link from "next/link"
import React from "react"
import {ElementContent} from "../types/types"

export const useServiceMap = <T extends ElementContent, >(content: T) => {
    const arr = Object.entries(content)

    let count1 = -1
    let count2 = 0
    let tempElem: JSX.Element

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
            if (prop.startsWith('title')) className = 'service__title'
            if (prop.startsWith('numSubtitle' || 'subtitle')) {
                className = 'service__subtitle service__subtitle--start'
                if (prop === 'subtitle1' || prop === 'numSubtitle1') className += ' service__subtitle--first'
            }
            if (prop.startsWith('label')) className = 'service__label'
            if (prop.startsWith('text') || prop.startsWith('numText') || prop.startsWith('numText')) className = 'service__text'
            if (index < arr.length - 1 && arr[index + 1][0].startsWith('list')) className += ` ${className}--list`

            returnElem = (
                <div className={className} key={prop}>
                    {prop.startsWith('numSubtitle') && count1 >= 0 && `${count1 + 1}. `}
                    {prop.startsWith('numText') && `${count1}.${count2}. `}
                    {value}
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
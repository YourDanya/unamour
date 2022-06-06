import React from "react";
import Link from "next/link";
import {ClickList, LinkList} from "../types/types";

export const getClasses = (arr: string[] | undefined) => arr?.join(' ') || ''

export const removeFromArr = (arr: any[], value: any) => {
    const index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}

export const shouldClass = (className: string, condition: boolean) : string => condition ? className : ''

export const mapList = (
    arr: any [],
    listClass: string,
    elemClass: string,
    handleClick?: (param: any) => void,
    Component?: React.FC<any>
) => {

    const isLinkList = (list: Array<LinkList> | Array<any>): list is Array<LinkList> => {
        return typeof (list[0].ref) === 'string' && typeof (list[0].text) === 'string'
    }

    console.log('Component', Component)

    const render = () => {
        let mapArr: React.ReactNode
        if (isLinkList(arr)) {
            mapArr =
                arr.map(({text, ref}) => (
                    <Link href={ref} key={text}>
                        <div className={elemClass}>
                            {text}
                        </div>
                    </Link>
                ))
        } else if (typeof handleClick === 'function' && !Component) {
            mapArr =
                arr.map(({text, id}) => (
                    <div className={elemClass} key={id ?? text} onClick={handleClick}>
                        {text}
                    </div>
                ))
        } else if (Component) {
            mapArr =
                arr.map((text) => (
                    <div className={elemClass} key={text}>
                        <Component text={text} handleClick={handleClick}/>
                    </div>
                ))
        } else {
            mapArr =
                arr.map((text) => (
                    <div className={elemClass} key={text}>
                        {text}
                    </div>
                ))
        }
        return (
            <div className={listClass}>
                {mapArr}
            </div>
        )
    }

    return render()
}
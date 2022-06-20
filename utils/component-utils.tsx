import React, {useState} from "react";
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
    Component?: React.FC<any> | null,
    active?: string,
    activeClass?: string
) => {

    const isLinkList = (list: Array<LinkList> | Array<any>): list is Array<LinkList> => {
        return typeof (list[0].ref) === 'string' && typeof (list[0].text) === 'string'
    }

    const render = () => {
        let mapArr: React.ReactNode
        if (isLinkList(arr)) {
            //map list of links
            mapArr =
                arr.map(({text, ref}) => (
                    <Link href={ref} key={text}>
                        <div className={elemClass}>
                            {text}
                        </div>
                    </Link>
                ))
        } else if (typeof handleClick === 'function' && !Component) {
            // map list of div with onclick
            mapArr =
                arr.map(({text, id, param}) => (
                    <div className={`${elemClass} ${active===param? activeClass: ''}`}
                         key={id ?? text}
                         onClick={() => handleClick(param)}>
                        {text}
                    </div>
                ))
        } else if (Component) {
            //map list of component
            mapArr = typeof arr[0] === 'string' ?
                arr.map((name) => (
                    <div className={elemClass}>
                        <Component name={name} handleClick={handleClick}/>
                    </div>
                )) :
                arr.map((params) => (
                    <div className={elemClass}>
                        <Component {...params} handleClick={handleClick}/>
                    </div>
                ))
        } else {
            // map list of div
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

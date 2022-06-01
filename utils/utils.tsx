import React from "react";
import Link from "next/link";
import {LinkList} from "../types/types";

export const getClasses = (arr: string[] | undefined) => arr?.join(' ') || ''

export const mapList = (arr: any [], listClass: string, elemClass: string, link = false) => {

    const isLinkList = (list: Array<LinkList> | Array<any>): list is Array<LinkList> => {
        return typeof (list[0].ref) === 'string' && typeof (list[0].text) === 'string'
    }

    return (
        <div className={elemClass}>
            {
                isLinkList(arr) ?
                    arr.map(({text, ref}) => (
                        <Link href={ref} key={text}>
                            <div className={elemClass}>
                                {text}
                            </div>
                        </Link>
                    )) :
                    arr.map((text) => (
                        <div className={elemClass} key={text}>
                            {text}
                        </div>
                    ))
            }
        </div>
    )
}
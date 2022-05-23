import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import InternHoc from "../../../components/internationalization-hoc/internationalization-hoc";
import {PrivacyContent} from "./privacy.content";
import {NextPageWithLayout} from "../../../types/types";
import Link from "next/link";

type privacyContent = {
    content: typeof PrivacyContent.ua
}

const Privacy: NextPageWithLayout<privacyContent> = ({content}) => {

    const loopThroughContentObject = (loopContent: typeof content) => {
        const html: JSX.Element []  = []
        let property:  keyof typeof loopContent

        let count1 = -1
        let count2 = 0

        for (property in loopContent) {
            let pushElem: JSX.Element | null

            if(property.startsWith('title')) {
                pushElem = (
                    <div className={'service__title'}>
                        {loopContent[property]}
                    </div>
                )
            }
            else if (property.startsWith('numSubtitle')) {
                pushElem = (
                    <div className='service__subtitle service__subtitle--policy'>
                        {count1>=0 && `${count1+1}. `}
                        {loopContent[property]}
                    </div>
                )
                count1++
                count2=1
            }
            else if (property.startsWith('subtitle')) {
                pushElem = (
                    <div className='service__subtitle--subtitle'>
                        {loopContent[property]}
                    </div>
                )
            }
            else if (property.startsWith('list')) {
                const arr = loopContent[property] as Array<string>
                pushElem = (
                    <div className='list list--policy'>
                        {
                            arr.map((item: string, index) => (
                                <div className={`list__item ${ count1===0 && 'list__item--no-dash' }`}>
                                    {property==='list1' && `${index+1}.`}
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                )
            }
            else if (property.startsWith('link')) {
                const {ref, text} = loopContent[property] as {ref: string, text: string}
                const lastText = html.pop()
                console.log(lastText)
                pushElem = (
                    <Link href={ref}>
                        <a className=''>{text}</a>
                    </Link>
                )
            }
            else if (property.startsWith('label')) {
                pushElem = (
                    <div className={'service__label'}>
                        {loopContent[property]}
                    </div>
                )
            }
            else if (property.startsWith('numText')){
                pushElem = (
                    <div className='service__text service__text--policy'>
                        {count1}.{count2}. {loopContent[property]}
                    </div>
                )
                count2++
            } else {
                pushElem = (
                    <div className='service__text service__text--policy'>
                        {loopContent[property]}
                    </div>
                )
            }

            html.push(pushElem)
        }
        return html
    }

    const html: JSX.Element [] = loopThroughContentObject(content)

    return (
        <div className={'privacy'}>
            {html}
        </div>
    )
}

Privacy.getLayout = getClientServiceLayout

export default InternHoc(Privacy, PrivacyContent)
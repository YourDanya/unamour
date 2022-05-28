import React from "react";
import {ComponentContent, ElementContent, NextPageWithLayout} from "../../../types/types";
import Link from "next/link";

const WithService= <P,>  (Component : NextPageWithLayout<P>)  => {
    
    const loopThroughContentObject = (content: ElementContent) => {
        const html: Array<JSX.Element> = []
        let property: keyof typeof content

        let count1 = -1
        let count2 = 0

        for (property in content) {
            let pushElem: JSX.Element | undefined

            if (property.startsWith('title')) {
                pushElem = (
                    <div className={'service__title'} key={property}>
                        {content[property]}
                    </div>
                )
            }
            else if (property.startsWith('numSubtitle')) {
                pushElem = (
                    <div className='service__subtitle service__subtitle--start ' key={property}>
                        {count1 >= 0 && `${count1 + 1}. `}
                        {content[property]}
                    </div>
                )
                count1++
                count2 = 1
            }
            else if (property.startsWith('subtitle')) {
                pushElem = (
                    <div className='service__subtitle service__subtitle--start' key={property}>
                        {content[property]}
                    </div>
                )
            }
            else if (property.startsWith('list')) {
                const arr = content[property] as Array<string>
                pushElem = (
                    <div className='list list--service' key={property}>
                        {
                            arr.map((item: string, index) => (
                                <div className={'list__item'} key={item+index}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                )
            }
            else if (property.startsWith('numList')) {
                const arr = content[property] as Array<string>
                pushElem = (
                    <div className='list list--policy' key={property}>
                        {
                            arr.map((item: string, index) => (
                                <div className={`list__item list__item--no-dash`} key={item+index}>
                                    {index + 1}.
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                )
            }
            else if (property.startsWith('textLink')) {
                const {ref, text} = content[property] as { ref: string, text: string }
                const {props: {className, children}} = html.pop() as JSX.Element
                pushElem = (
                    <div className={className} key={property}>
                        {children}
                        <Link href={ref}>
                            <a className=''>{text}</a>
                        </Link>
                    </div>
                )
            }
            else if (property.startsWith('label')) {
                pushElem = (
                    <div className={'service__label service__label--mb20'} key={property}>
                        {content[property]}
                    </div>
                )
            }
            else if (property.startsWith('numText')) {
                pushElem = (
                    <div className='service__text service__text--policy' key={property}>
                        {count1}.{count2}. {content[property]}
                    </div>
                )
                count2++
            }
            else {
                pushElem = (
                    <div className='service__text service__text--policy' key={property}>
                        {content[property]}
                    </div>
                )
            }

            html.push(pushElem)
        }
        return html
    }

    const ServiceComponent: NextPageWithLayout<P & ComponentContent> = ( props) => {
        const {content} = props
        const html: Array<JSX.Element> | undefined = content && loopThroughContentObject(content)

        return (
            <Component {...props}>
                {html}
            </Component>
        )
    }

    if ('getLayout' in Component) ServiceComponent.getLayout = Component.getLayout

    return ServiceComponent
}


export default WithService
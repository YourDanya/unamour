import React from "react";
import {getClientServiceLayout} from "../../../components/client-service/client-service.component";
import {NextPageWithLayout} from "../../../types/types";
import {PolicyContent} from "./policy.content";
import InternHoc from "../../../components/internationalization-hoc/internationalization-hoc";
import layer from "react-map-gl/src/components/layer";
import {string} from "prop-types";

type PolicyPageProps = {
    content: typeof PolicyContent.ua
}

const Policy: NextPageWithLayout<PolicyPageProps> = ({content}) => {

    const mapList = (list: Array<string>) => (
        <div className={'client-service__page-list'}>
            {
                list.map((item: string) => (
                    <div className={'client-service__page-list-item'}>

                    </div>
                ))
            }
        </div>
    )

    const loopThroughContentObject = (loopContent: typeof content) => {
        const html: JSX.Element []  = []
        let property:  keyof typeof loopContent
        let y = -1
        let x = 0
        for (property in loopContent) {
            let pushElem: JSX.Element | null

            if(property.startsWith('title')) {
                pushElem = (
                    <div className={'client-service__page-title'}>
                        {loopContent[property]}
                    </div>
                )
            }
            else if (property.startsWith('subtitle')) {
                pushElem = (
                    <div className={'client-service__page-subtitle client-service__page-subtitle--policy'}>
                        {y>=0 && `${y+1}. `}
                        {loopContent[property]}
                    </div>
                )
                y++
                x=1
            }
            else if (property.startsWith('list')) {
                const arr = loopContent[property] as Array<string>
                pushElem = (
                    <div className='list list--policy'>
                        {
                            arr.map((item: string, index) => (
                                <div className={`list__item ${ y===0 && 'list__item--no-dash' }`}>
                                    {property==='list1' && `${index+1}.`}
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                )
            }
            else  {
                pushElem = (
                    <div className={'client-service__page-text client-service__page-text--policy'}>
                        {y}.{x}. {loopContent[property]}
                    </div>
                )
                x++
            }
            html.push(pushElem)
        }
        return html
    }

    const html: JSX.Element [] = loopThroughContentObject(content)

    return (
        <div className={'policy'}>
            {
               html
            }
        </div>
    )
}

Policy.getLayout = getClientServiceLayout

export default InternHoc(Policy, PolicyContent)
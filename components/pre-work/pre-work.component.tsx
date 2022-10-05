import React from "react"
import usePreWork from 'components/pre-work/pre-work.hook'

type PreWorkProps = {}

const PreWork: React.FC<PreWorkProps> = () => {
    usePreWork()
    return (<></>)
}

export default PreWork
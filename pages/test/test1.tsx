import React, {useState} from "react"
import Sidebar from "../../components/common/sidebar/sidebar.component";
import {useToggle} from "../../hooks/event-handler.hooks";

const Page = ({date}: any) => {
    const [state, handleClick] = useToggle()
    return (
        <div className={'test1'}>
            {/*<Sidebar active={b}>*/}
            {/*    */}
            {/*</Sidebar>*/}
        </div>
    )
}

export default Page
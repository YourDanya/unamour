import React, {useMemo} from "react";
import {modalProps} from "../modal/modal.component";

type sidebarProps = {
    left: boolean,
    top?: true,
    hideTopNav?: () => void,
    active: boolean,
    hideModal?: (event: React.MouseEvent<HTMLElement>) => void
}

const Sidebar: React.FC<sidebarProps> = (
    {left, children, active, hideModal, top, hideTopNav}) => {

    console.log('lagging')

    return (
        <>
            {/*<div className={`sidebar ${active ? 'sidebar--active' : ''}`} onClick={() => setActive(false)}/>*/}
            <div className={`sidebar ${left ? 'sidebar--left' : 'sidebar--right'} ${left && active ? 'sidebar--left--active' : active ? 'sidebar--right--active' : ''} ${top? 'sidebar--top' : ''}`
            }>
                {
                    top && (
                        <div className={'sidebar__back'} onClick={hideTopNav}>
                            <div className="sidebar__back-line sidebar__back-line--first"/>
                            <div className="sidebar__back-line sidebar__back-line--last"/>
                        </div>
                    )
                }
                {
                    !left && hideModal && (
                        <div className={'sidebar__cross'} onClick={hideModal}>
                            <div className="sidebar__cross-line sidebar__cross-line--first"/>
                            <div className="sidebar__cross-line sidebar__cross-line--last"/>
                        </div>
                    )
                }
                {children}
            </div>
        </>
    )
}

const shouldUpdate = (prevProps: sidebarProps, currentProps: sidebarProps) => prevProps.active===currentProps.active

export default React.memo(Sidebar, shouldUpdate)
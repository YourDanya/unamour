import React from "react";

interface sidebarProps {
    left: boolean,
    active: boolean,
    setActive: React.Dispatch<boolean>
}

const Sidebar: React.FC<sidebarProps> = ({left, children, active, setActive}) => {

    return (
        <>
            <div className={`sidebar ${active ? 'sidebar--active' : ''}`} onClick={() => setActive(false)}/>
            <div className={`sidebar-block  
                ${left ? 'sidebar-block--left' : 'sidebar-block--right'}
                ${left && active ? 'sidebar-block--left--active' :
                active ? 'sidebar-block--right--active' : ''}`
            }>
                {
                    !left && (
                        <div className={'sidebar__cross'} onClick={() => setActive(false)}>
                            <div className="sidebar__cross-line"/>
                            <div className="sidebar__cross-line"/>
                        </div>
                    )
                }
                {children}
            </div>
        </>
    )
}

export default Sidebar
import React from 'react'
import useMenu from 'components/client-service/menu/menu.hook'
import Link from 'next/link'
import {ServiceMenuProps} from 'components/client-service/menu/menu.types'
import {FC} from 'react'

const ServiceMenu: FC<ServiceMenuProps> = ({className}) => {

    const {content, transl, pathname} = useMenu()

    return (
        <div className={`service__menu ${className ?? ''}`}>
            {content.links.map((url, index) =>
                <Link
                    href={`/client-service/${url}`}
                    key={url}
                    className={`service__menu-link ${`/client-service/${url}` === pathname ? 'service__menu-link--active' : ''} 
                         ${index===0? 'service__menu-link--first' : ''}`}>
                    {transl?.links[index]}
                </Link>
            )}
        </div>
    );
}

export default ServiceMenu
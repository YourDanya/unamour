import React from 'react'
import {FC} from 'react'
import {ServiceMenuProps} from 'app/[locale]/client-service/_components/_layout/menu/menu.types'
import useMenu from 'app/[locale]/client-service/_components/_layout/menu/menu.hook'
import Link from 'next/link'

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
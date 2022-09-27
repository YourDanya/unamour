import React from 'react'
import useMenu from 'components/client-service/menu/menu.hook'
import Link from 'next/link'

type menuProps = {
    className?: string
}

const ServiceMenu: React.FC<menuProps> = ({className}) => {

    const {content, translation, pathname} = useMenu()
    console.log(translation)

    return (
        <div className={`service__menu ${className ?? ''}`}>
            {content.links.map((url, index) =>
                <Link href={`/client-service/${url}`} key={url}>
                    <a className={`service__menu-link ${`/client-service/${url}` === pathname ? 'service__menu-link--active' : ''} 
                         ${index===0? 'service__menu-link--first' : ''}`}>
                        {translation?.links[index]}
                    </a>
                </Link>
            )}
        </div>
    )
}

export default ServiceMenu
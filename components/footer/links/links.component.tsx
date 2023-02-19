import React from 'react'
import Link from 'next/link'

type LinkProps = {
    className?: string
}

const Links: React.FC<LinkProps> = ({className}) => {
    return (
        <div className={`footer__links ${className??''}`}>
            <Link href="/" className='footer__link'>
                КОНТАКТИ
            </Link>
            <Link href="/" className='footer__link'>
                INSTAGRAM
            </Link>
            <Link href={'/'} className='footer__link'>
                WHATSAPP
            </Link>
            <Link href={'/'} className='footer__link'>
                TELEGRAM
            </Link>
        </div>
    );
}

export default Links
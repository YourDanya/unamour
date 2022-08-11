import React from "react"
import Link from "next/link"

type LinkProps = {
    className?: string
}

const Links: React.FC<LinkProps> = ({className}) => {
    return (
        <div className={`footer__links ${className??''}`}>
            <Link href="/">
                <a className='footer__link'>КОНТАКТИ</a>
            </Link>
            <Link href="/">
                <a className='footer__link'>INSTAGRAM</a>
            </Link>
            <Link href={'/'}>
                <a className='footer__link'>WHATSAPP</a>
            </Link>
            <Link href={'/'}>
                <a className='footer__link'>TELEGRAM</a>
            </Link>
        </div>
    )
}

export default Links
import React from "react";
import Link from "next/link";

type linksProps = {
    category: string,
    slugCategory: string
}

const Links: React.FC<linksProps> = (props) => {
    const {category, slugCategory} = props

    return (
        <div className="shop-item__links">
            <Link href={'/'}>
                <a className={'shop-item__link'}>Головна</a>
            </Link>
            <span className={'shop-item__links-slash'}>/</span>
            <Link href={'/all'}>
                <a className={'shop-item__link'}>Каталог</a>
            </Link>
            <span className={'shop-item__links-slash'}>/</span>
            <Link href={`/${slugCategory}`}>
                <a className={'shop-item__link'}>{category}</a>
            </Link>
        </div>
    )
}

export default Links
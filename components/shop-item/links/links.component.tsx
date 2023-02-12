import {FC} from 'react'
import Link from 'next/link'
import {linksProps} from 'components/shop-item/links/links.types'
import useLinks from 'components/shop-item/links/links.hook'

const Links: FC<linksProps> = (props) => {
    const {category, slugCategory} = props
    const {transl} = useLinks()

    return (
        <div className="shop-item__links">
            <Link href={'/'}>
                <a className={'shop-item__link'}>{transl.main}</a>
            </Link>
            <span className={'shop-item__links-slash'}>/</span>
            <Link href={'/all'}>
                <a className={'shop-item__link'}>{transl.catalog}</a>
            </Link>
            <span className={'shop-item__links-slash'}>/</span>
            <Link href={`/${slugCategory}`}>
                <a className={'shop-item__link'}>{category}</a>
            </Link>
        </div>
    )
}

export default Links
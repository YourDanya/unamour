import {FC} from 'react'
import Link from 'next/link'
import {LinksProps} from 'app/[locale]/shop-items/[category]/[item]/_components/links/links.types'
import useLinks from 'app/[locale]/shop-items/[category]/[item]/_components/links/links.hook'

const Links: FC<LinksProps> = (props) => {
    const {category, slugCategory} = props
    const {transl} = useLinks()

    return (
        <div className="shop-item__links">
            <Link href={'/'} className={'shop-item__link'}>
                {transl.main}
            </Link>
            <span className={'shop-item__links-slash'}>/</span>
            <Link href={'/all'} className={'shop-item__link'}>
                {transl.catalog}
            </Link>
            <span className={'shop-item__links-slash'}>/</span>
            <Link href={`/${slugCategory}`} className={'shop-item__link'}>
                {category}
            </Link>
        </div>
    );
}

export default Links
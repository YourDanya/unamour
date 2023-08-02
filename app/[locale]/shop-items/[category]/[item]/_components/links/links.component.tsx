import {FC} from 'react'
import Link from 'next/link'
import {LinksProps} from 'app/[locale]/shop-items/[category]/[item]/_components/links/links.types'
import useLinks from 'app/[locale]/shop-items/[category]/[item]/_components/links/links.hook'

const Links: FC<LinksProps> = (props) => {
    const {props: {common: {slugCategory}}} = props
    const {transl} = useLinks(props)

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
                {transl.category}
            </Link>
        </div>
    )
}

export default Links
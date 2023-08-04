import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import NavLink from 'app/_common/components/nav-link/nav-link.component'
import {clothing} from 'app/_common/content/categories/categories.content'

export const Categories = (props: ReturnType<typeof useLayout>) => {
    const {transl, paramsUrl, locale} = props

    return (
        <div className="shop-items-categories categories">
            <NavLink
                href={`/${locale}/shop-items/all/${paramsUrl ? `?${paramsUrl}` : ''}`}
                className={'categories__link'}
                activeClassName={'categories__link--active'}
            >
                {transl.all}
            </NavLink>
            {clothing.map((ref, index) => (
                <NavLink
                    href={`/${locale}/shop-items/${ref}${paramsUrl ? `?${paramsUrl}` : ''}`}
                    className={'categories__link'}
                    activeClassName={'categories__link--active'}
                    key={ref}
                >
                    {transl.clothing[index]}
                </NavLink>
            ))}
        </div>
    )
}
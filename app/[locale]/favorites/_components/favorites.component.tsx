'use client'

import Link from 'next/link'
import {FC} from 'react'
import useFavorites from 'app/[locale]/favorites/_components/favorites.hook'
import Button from 'app/_common/components/button/button.component'
import Spinner from 'app/_common/components/spinner/spinner.component'
import FavoriteItem from 'app/[locale]/favorites/_components/favorite-item/favorite-item.component'
import {CategoryItem} from 'app/_common/types/category-item'

const Favorites: FC = () => {
    const state = useFavorites()
    const {transl, user, getFavorites} = state

    return (
        <div className={'favorites-page favorites container'}>
            <div className={'favorites__title'}>
                {transl.favorite}
            </div>
            {user === undefined || (user && !getFavorites.success && !getFavorites.error) ? (
                <Spinner className={'favorites__spinner'}/>
            ) : (
                <Content {...state}/>
            )}
        </div>
    )
}
export default Favorites

const Content = (props: ReturnType<typeof useFavorites>) => {
    const {user} = props

    return (
        <div className={'favorites-content'}>
            {user === null && (
                <NoUser {...props}/>
            )}
            {user && (
                <WithUser {...props}/>
            )}
        </div>
    )
}

const NoUser = (props: ReturnType<typeof useFavorites>) => {
    const {transl, onLogin} = props

    return (
        <div className="favorites-no-user no-user">
            <div className="no-user__title">
                {transl.noUser}
            </div>
            <Button className={'no-user__button'} onClick={onLogin}>
                {transl.login}
            </Button>
        </div>
    )
}

const WithUser = (props: ReturnType<typeof useFavorites>) => {
    const {items} = props

    return (
        <>
            {!items || items.length === 0 ? (
                <Empty {...props}/>
            ) : (
                <Items {...props}/>
            )}
        </>
    )
}

const Items = (props: ReturnType<typeof useFavorites>) => {
    const {items, height, itemRef} = props

    return (
        <div className={'favorites-items'}>
            {(items as CategoryItem[]).map((item, index) => (
                <FavoriteItem
                    key={index}
                    item={item}
                    height={height}
                    itemRef={index === 0 ? itemRef : undefined}
                />
            ))}
        </div>
    )
}

const Empty = (props: ReturnType<typeof useFavorites>) => {
    const {transl} = props

    return (
        <div className={'favorites-empty empty'}>
            <div className="empty__title">
                {transl.emptyTitle}
            </div>
            <Link href={'/shop-items/all'} className={'empty__button'}>
                {transl.emptyButton}
            </Link>
        </div>
    )
}


'use client'

import {FC} from 'react'
import FavoritesSvg from 'app/_common/components/favorite-like/svg/favorites-svg.component'
import Button from 'app/_common/components/button/button.component'
import {FavoriteLikeProps} from 'app/_common/components/favorite-like/favorite-like.types'
import useFavoriteLike from 'app/_common/components/favorite-like/favorite-like.hook'

const FavoriteLike: FC<FavoriteLikeProps> = (props) => {
    const {className} = props
    const {liked, onAction} = useFavoriteLike(props)

    return (
        <Button className={`favorite-like ${className ?? ''}`} onClick={onAction}>
            <div className={`favorite-like__state ${liked ? 'favorite-like__state--liked' : ''}`}>
                <FavoritesSvg/>
            </div>
        </Button>
    )
}

export default FavoriteLike
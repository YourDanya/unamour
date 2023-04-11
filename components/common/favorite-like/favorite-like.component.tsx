import {FavoriteLikeProps} from 'components/common/favorite-like/favorite-like.types'
import {FC} from 'react'
import Button from 'components/common/button/button.component'
import useFavoriteLike from 'components/common/favorite-like/favorite-like.hook'
import FavoritesSvg from 'components/common/favorite-like/svg/favorites-svg.component'

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
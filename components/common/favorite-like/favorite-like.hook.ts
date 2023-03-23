import {FavoriteLikeProps} from 'components/common/favorite-like/favorite-like.types'
import {useState} from 'react'
import {useApiCall} from 'utils/api/api-v2.utils'
import {useRef} from 'react'
import {useDebounce} from 'hooks/enhanced/enhanced.hooks'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {useOmitFirstEffect} from 'hooks/component/component.hooks'

const useFavoriteLike = (props: FavoriteLikeProps) => {
    const {id} = props
    const [color, setColor] = useState(props.color)
    const [liked, setLiked] = useState(props.liked)

    const postFavorite = useApiCall('users/favorites', {
        method: 'POST',
        body: {
            id,
            color
        }
    })

    const deleteFavorite = useApiCall(`users/favorites/${id}/${color}`, {
        method: 'DELETE'
    })

    const loading = postFavorite.loading || deleteFavorite.loading

    const debouncingRef = useRef(false)
    const likedRef = useRef(props.liked)

    const toggleFavorite = () => {
        if (!debouncingRef.current) {
            return
        }
        debouncingRef.current = false
        if (likedRef.current) {
            postFavorite.start()
        } else {
            deleteFavorite.start()
        }
    }

    const onToggleFavorite = useDebounce(toggleFavorite)

    const onAction = () => {
        debouncingRef.current = true
        likedRef.current = !likedRef.current
        setLiked(likedRef.current)
        onToggleFavorite()
    }

    const router = useRouter()
    useEffect(() => {
        window.addEventListener('beforeunload', toggleFavorite)
        router.events.on('routeChangeStart', toggleFavorite)
        return () => {
            router.events.off('routeChangeStart', toggleFavorite)
            window.removeEventListener('beforeunload', toggleFavorite)
        }
    },[])

    useOmitFirstEffect(() => {
        toggleFavorite()
        setColor(props.color)
    }, [props.color])

    return {liked, onAction, loading}
}

export default useFavoriteLike
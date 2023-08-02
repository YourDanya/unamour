import {useState} from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useApiCall} from 'app/[locale]/_common/hooks/api/api.hooks'
import {useOmitFirstEffect} from 'app/[locale]/_common/hooks/component/component.hooks'
import useDebounce from 'app/[locale]/_common/hooks/helpers/debounce/debounce.hook'
import useFavoritesStore from 'app/[locale]/_store/favorites/favorites.store'
import {FavoriteLikeProps} from 'app/[locale]/_common/components/favorite-like/favorite-like.types'

const useFavoriteLike = (props: FavoriteLikeProps) => {
    const {id} = props
    const [color, setColor] = useState(props.color)
    const [liked, setLiked] = useState(props.liked)

    const postFavorite = useApiCall('users/favorites', {
        method: 'POST',
        body: {
            id,
            color
        },
        keepalive: true
    })

    const deleteFavorite = useApiCall(`users/favorites/${id}/${color}`, {
        method: 'DELETE',
        keepalive: true
    })

    const loading = postFavorite.loading || deleteFavorite.loading

    const debouncingRef = useRef(false)
    const likedRef = useRef(props.liked)

    const {addFavorite, removeFavorite} = useFavoritesStore()

    const toggleFavorite = () => {
        if (!debouncingRef.current) {
            return
        }
        debouncingRef.current = false
        if (likedRef.current) {
            postFavorite.start()
            addFavorite({color, id})
        } else {
            deleteFavorite.start()
            removeFavorite({color, id})
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
        return () => {
            window.removeEventListener('beforeunload', toggleFavorite)
        }
    },[])

    useOmitFirstEffect(() => {
        toggleFavorite()
        setColor(props.color)
    }, [props.color])

    useOmitFirstEffect(() => {
        likedRef.current = props.liked
        setLiked(props.liked)
    }, [props.liked])

    return {liked, onAction, loading}
}

export default useFavoriteLike
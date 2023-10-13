import {useState} from 'react'
import {useRef} from 'react'
import {useEffect} from 'react'
import useOmitFirstEffect from 'app/_common/hooks/helpers/omit-first-effect/omit-first-effect.hook'
import useDebounce from 'app/_common/hooks/helpers/debounce/debounce.hook'
import {FavoriteLikeProps} from 'app/_common/components/favorite-like/favorite-like.types'
import {useApiCall} from 'app/_common/hooks/api/api-call/api-call.hook'
const useFavoriteLike = (props: FavoriteLikeProps) => {
    const {id} = props
    const [color, setColor] = useState(props.color)
    const [liked, setLiked] = useState(props.liked)

    const postFavorite = useApiCall( {
        url: 'favorites',
        method: 'POST',
        body: {
            shopItemId: id,
            color
        }
    })

    const deleteFavorite = useApiCall( {
        url: `favorites/${id}/${color}`,
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
            console.log('post')
            postFavorite.start()
        } else {
            console.log('delete')
            deleteFavorite.start()
        }
    }

    const onToggleFavorite = useDebounce(toggleFavorite, 10000)
    const onAction = () => {
        debouncingRef.current = true
        likedRef.current = !likedRef.current
        setLiked(likedRef.current)
        onToggleFavorite()
    }

    useEffect(() => {
        window.addEventListener('beforeunload', toggleFavorite)
        return () => {
            toggleFavorite()
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
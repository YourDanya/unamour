import {
    PhotosProps
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.types'
import {useState} from 'react'
import {ChangeEvent} from 'react'
import {useEffect} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {MouseEvent} from 'react'
import useReviewForm from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/review-form.hook'

const usePhotos = (props: ReturnType<typeof useReviewForm>) => {
    const {main: {setPhotos, photos, reset, setReset}} = props
    const [urls, setUrls] = useState<string[]>([])

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const newPhotos = event.currentTarget.files ?? []
        const newUrls: string[] = []

        let num = 0
        const leftToAdd = 5 - photos.length
        num = Math.min(newPhotos.length, leftToAdd)
        
        for (let i = 0; i < num; i++) {
            photos.push(newPhotos[i])
            urls.push(URL.createObjectURL(newPhotos[i]))
        }

        setPhotos([...photos])
        setUrls([...urls])
    }

    const onRemove = (event: MouseEvent) => {
        event.preventDefault()
        const index = +event.currentTarget.getAttribute('data-index')!
        URL.revokeObjectURL(urls[index])
        setUrls(urls => {
            urls.splice(index, 1)
            return [...urls]
        })
        setPhotos(photos => {
            photos.splice(index, 1)
            return [...photos]
        })
    }

    useEffect(() => {
        return () => {
            urls.forEach(url => {
                URL.revokeObjectURL(url)
            })
        }
    }, [])

    useEffect(() => {
        if (!reset) {
            return
        }
        urls.forEach(url => {
            URL.revokeObjectURL(url)
        })
        setUrls([])
        setReset(false)
    }, [reset])

    return {onSelect, urls, onRemove}
}

export default usePhotos
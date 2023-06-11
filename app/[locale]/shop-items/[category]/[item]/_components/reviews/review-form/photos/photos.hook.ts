import {
    PhotosProps
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.types'
import {useState} from 'react'
import {ChangeEvent} from 'react'
import {useEffect} from 'react'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {MouseEvent} from 'react'

const usePhotos = (props: PhotosProps) => {
    const {setPhotos} = props
    const [urls, setUrls] = useState<string[]>([])

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const newFiles = event.currentTarget.files ?? []
        setPhotos(files => {
            const leftToAdd = 5 - files.length
            let num = Math.min(newFiles.length, leftToAdd)
            for (let i = 0; i < num; i++) {
                files.push(newFiles[i])
            }
            if (num === 5) {
                return files
            }
            return [...files]
        })
    }

    const onRemove = (event: MouseEvent) => {
        event.preventDefault()
        const index = +event.currentTarget.getAttribute('data-index')!
        URL.revokeObjectURL(urls[index])
        setUrls(urls => {
            urls.splice(index, 0)
            return [...urls]
        })
        setPhotos(photos => {
            photos.splice(index, 0)
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

    return {onSelect, urls, onRemove}
}

export default usePhotos
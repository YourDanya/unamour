import {FC} from 'react'
import useFileInput
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.hook'
import Button from 'app/[locale]/_common/components/button/button.component'
import usePhotoInput
    from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.hook'
import usePhotos from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.hook'
import {
    PhotosProps
} from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/review-form/photos/photos.types'

const Photos: FC<PhotosProps> = (props) => {
    const {inputRef} = props
    const {onSelect, urls, onRemove} = usePhotos(props)

    return (
        <div className={'review-form-photos photos'}>
            <input
                className={'photos__input'}
                ref={inputRef}
                type="file"
                onChange={onSelect}
                accept="image/*"
            />
            {urls.map(url => (
                <div className={'photos__preview'}>
                    <img
                        className={'photos__preview-img'}
                        src={url}
                        alt={'photos preview'}
                    />
                    <Button className={'photos__remove-btn'} onClick={onRemove}>
                        <div className={'close photos__remove-close'}/>
                    </Button>
                </div>
            ))}
        </div>
    )
}

export default Photos
import {FC} from 'react'
import {baseURL} from 'app/_common/utils/api/api.utils'
import Button from 'app/_common/components/button/button.component'
import {
    ItemImageProps
} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.types'
import useItemImage
    from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.hook'

const Image: FC<ItemImageProps> = (props) => {
    const {url} = props
    const {transl, onUpdate, onDelete} = useItemImage(props)

    return (
        <div className={'item-form__image-wrapper'}>
            <img
                className={'item-form__image'}
                src={url.includes('http') ? url : `${baseURL}/images/${url}`}
                alt={'preview image'}
            />
            <Button className={'item-form__button'} onClick={onUpdate}>
                {transl.updateImage}
            </Button>
            <Button className={'item-form__button'} onClick={onDelete}>
                {transl.deleteImage}
            </Button>
        </div>
    )
}

export default Image
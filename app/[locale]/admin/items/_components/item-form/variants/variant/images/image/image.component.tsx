import {FC} from 'react'
import {baseURL} from 'app/_common/utils/api/api.utils'
import Button from 'app/_common/components/button/button.component'
import {
    ItemImageProps
} from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.types'
import useItemImage
    from 'app/[locale]/admin/items/_components/item-form/variants/variant/images/image/image.hook'

const Image: FC<ItemImageProps> = (props) => {
    const {transl, onUpdate, onDelete, src} = useItemImage(props)

    return (
        <div className={'admin-item-form-image form'}>
            <img
                className={'form__image'}
                src={src}
                alt={'preview image'}
            />
            <Button className={'form__button'} onClick={onUpdate}>
                {transl.updateImage}
            </Button>
            <Button className={'form__button'} onClick={onDelete}>
                {transl.deleteImage}
            </Button>
        </div>
    )
}

export default Image
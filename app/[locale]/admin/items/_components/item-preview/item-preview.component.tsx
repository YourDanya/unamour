import Button from 'app/_common/components/button/button.component'
import LoadImage from 'app/_common/components/load-image/load-image.component'
import {ItemPreviewProps} from 'app/[locale]/admin/items/_components/item-preview/item-preview.types'
import useItemPreview from 'app/[locale]/admin/items/_components/item-preview/item-preview.hook'

const ItemPreview = (props: ItemPreviewProps) => {
    const {itemIndex} = props
    const {
        name, image, category, onUpdate, onDelete, transl
    } = useItemPreview(props)

    return (
        <>
            <div className={'table__name'}>
                {name}
            </div>
            <div className={'table__category'}>
                {category}
            </div>
            <LoadImage
                className={'table__image'}
                src={image.url}
                alt={"admin item preview"}
            />
            <div className={'table__actions'}>
                <Button onClick={onUpdate} className={'table__button'}>
                    {transl.update}
                </Button>
                <Button onClick={onDelete} className={'table__button'}>
                    {transl.delete}
                </Button>
            </div>
        </>
    )
}

export default ItemPreview
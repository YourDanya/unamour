import {ItemPreviewProps} from 'app/[locale]/admin/items/_components/item-preview/item-preview.types'
import useItemPreview from 'app/[locale]/admin/items/_components/item-preview/item-preview.hook'
import Button from 'app/_common/components/button/button.component'

const ItemPreview = (props: ItemPreviewProps) => {
    const {itemIndex} = props
    const {name, image, category, onUpdate, onDelete} = useItemPreview(props)

    return (
        <div className={'admin-item-preview item'}>
            <div className={'item__name'}>
                {name}
            </div>
            <div className={'item__category'}>
                {category}
            </div>
            <img className={'item__img'} src={image.url}/>
            <Button onClick={onUpdate} className={'item__button'}/>
            <Button onClick={onDelete} className={'item__button'}/>
        </div>
    )
}

export default ItemPreview
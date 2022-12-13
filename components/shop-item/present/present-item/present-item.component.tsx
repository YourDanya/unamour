import React from 'react'
import usePresentItem from 'components/shop-item/present/present-item/present-item.hook'

type presentItemProps = {
    images: string[],
    name: string,
    color: string,
    activeSize: string,
    price: string
}

const PresentItem: React.FC<presentItemProps> = (props) => {

    const {images, name, color, activeSize, price} = props
    const {transl} = usePresentItem()

    return (
        <div className="present__item">
            <img className={'present__img'} src={images[0]} alt={'present img'}/>
            <div className={'present__info'}>
                <div className={'present__name'}>{name}</div>
                <div className={'present__property-block'}>
                    <div className="present__property">{transl.color}</div>
                    {/*<div className={'present__color'} style={{backgroundColor: color.code}}/>*/}
                </div>
                <div className={'present__property-block'}>
                    <div className="present__property">{transl.size}</div>
                    <div className="present__size">{activeSize}</div>
                </div>
                <div className={'present__property-block'}>
                    <div className="present__property">{transl.price}</div>
                    <div className="present__price">{price} {transl.currency}</div>
                </div>
            </div>
        </div>
    )
}

export default PresentItem
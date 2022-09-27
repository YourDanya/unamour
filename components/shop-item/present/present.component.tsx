import React from 'react'
import PresentItem from 'components/shop-item/present/present-item/present-item.component'
import PresentForm from 'components/shop-item/present/present-form/present-form.component'

export type PresentProps = {
    price: number,
    name: string,
    images: string[],
    activeSize: string,
    color: object & { code: string }
}

const Present: React.FC<PresentProps> = (props) => {

    const {name, images, activeSize, price, color} = props

    return (
        <div className={`present`}>
            <PresentItem images={images} name={name} color={color} activeSize={activeSize} price={price}/>
            <PresentForm  price={price}/>
        </div>
    )
}

export default Present
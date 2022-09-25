import React from "react"
import PresentForm from "./present-form/present-form.component"
import PresentItem from "./present-item/present-item.component"

export type presentProps = {
    price: number,
    name: string,
    images: string[],
    activeSize: string,
    color: object & { code: string }

}

const Present: React.FC<presentProps> = (props) => {

    const {name, images, activeSize, price, color} = props

    return (
        <div className={`present`}>
            <PresentItem images={images} name={name} color={color} activeSize={activeSize} price={price}/>
            <PresentForm  price={price}/>
        </div>
    )
}

export default Present
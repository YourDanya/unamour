import React from "react"
import PresentForm from "./present-form/present-form.component"
import usePresent from "./present.hook"
import PresentItem from "./present-item/present-item.component"

export type presentProps = {
    price: number,
    name: string,
    images: string[],
    activeSize: string,
    color: object & { code: string }

}

const Present: React.FC<presentProps> = (props) => {

    const {price, name, images, activeSize, translation, color, inputs, handleChange, handleBlur} = usePresent(props)

    return (
        <div className={`present`}>
            <PresentItem images={images} name={name} color={color} activeSize={activeSize} price={price}/>
            <PresentForm inputs={inputs} handleChange={handleChange} localeInputs={translation.inputs} price={price}/>
        </div>
    )
}

export default Present
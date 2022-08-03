import React from "react"
import PresentForm from "./present-form/present-form.component"
import usePresent from "./present.hook"

export type presentProps = {
    price: number,
    name: string,
    images: string[],
    activeSize: string,
    color: object & { code: string },

}

const Present: React.FC<presentProps> = (props) => {

    const {price, name, images, activeSize, translation, color, inputs, handleChange, handleBlur} = usePresent(props)

    return (
        <div className={`present`}>
            <div className="present__item">
                <img className={'present__img'} src={images[0]} alt={'present img'}/>
                <div className={'present__info'}>
                    <div className={'present__name'}>{name}</div>
                    <div className={'present__properties'}>
                        <div className={'present__property-block'}>
                            <div className="present__property">Колір</div>
                            <div className={'present__color'} style={{backgroundColor: color.code}}/>
                        </div>
                        <div className={'present__property-block'}>
                            <div className="present__property"></div>
                            <div className="present__size">{activeSize}</div>
                        </div>
                        <div className={'present__property-block'}>
                            <div className="present__property">Ціна</div>
                            <div className="present__price">{price} ₴</div>
                        </div>
                    </div>
                </div>
            </div>
            <PresentForm inputs={inputs} handleChange={handleChange} localeInputs={translation.inputs} price={price}/>
        </div>
    )
}

export default Present
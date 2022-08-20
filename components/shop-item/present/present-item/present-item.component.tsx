import React from "react"

type presentItemProps = {
    images: string[],
    name: string,
    color: object & {code: string},
    activeSize: string,
    price: number
}

const PresentItem: React.FC<presentItemProps> = (props) => {

    const {images, name, color, activeSize, price} = props

    return (
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
    )
}

export default PresentItem
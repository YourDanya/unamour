import {FC} from 'react'
import {ParametersProps} from 'components/shop-item/parameters/parameters.types'
import useParameters from 'components/shop-item/parameters/parameters.hook'

const Parameters: FC<ParametersProps> = (props) => {
    const {name, oldPrice, price, sizes, showModal, activeSize, onActiveSize, color, onActiveColor} = props
    const {transl, colorCodes} = useParameters(props)

    return (
        <>
            <div className="shop-item__name">
                {name}
            </div>
            <div className="shop-item__prices">
                <div className={'shop-item__price shop-item__price--old'}>
                    <div className={'shop-item__price-crossed'}/>
                    {oldPrice} ₴
                </div>
                <div className={'shop-item__price'}>{price} ₴</div>
            </div>
            <div className="shop-item__sizes">
                <div className="shop-item__sizes-top">
                    <div className="shop-item__sizes-label">{transl.sizes}</div>
                    <button className="shop-item__sizes-choose" name={'size'} onClick={showModal}>
                        {transl.chooseSize}
                    </button>
                </div>
                <div className={'shop-item__sizes-list'}>
                    {sizes.map(size => (
                        <button
                            className={`shop-item__size ${activeSize === size ? 'shop-item__size--active' : ''}`}
                            key={size}
                            name={size}
                            onClick={onActiveSize}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className="shop-item__colors">
                <div className={'shop-item__colors-label'}>{transl.color}: {color}</div>
                <div className="shop-item__colors-list">
                    <div className='shop-item__color shop-item__color--current' style={{backgroundColor: color}}/>
                    {colorCodes.map(({code, slug}) => (
                        <button
                            onClick={onActiveColor}
                            name={slug}
                            className={`shop-item__color`}
                            key={code}
                            style={{backgroundColor: code}}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Parameters
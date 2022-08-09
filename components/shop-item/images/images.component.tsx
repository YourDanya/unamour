import React from "react"
import Slider from "../../common/slider/slider.component"
import useImages from "./images.hook"

export type imagesProps = {
    images: string[],
}

const Images: React.FC<imagesProps> = (props) => {

    const {images, current, handleTabClick, setCurrent} = useImages(props)

    return (
        <div className="shop-item__images">
            <div className="shop-item__tabs">
                {images.map((url, index) =>
                    <button
                        className={`shop-item__tab ${current===index? 'shop-item__tab--current' : ''}`}
                        key={url + index}
                        data-index={index}
                        onClick={handleTabClick}
                    >
                        <img className='shop-item__tab-img' src={url} alt={`tab image ${index}`}/>
                    </button>
                )}
            </div>
            <div className="shop-item__slider">
                <Slider current={current} setCurrent={setCurrent}>
                    {images.map((url, index) =>
                        <img className={'shop-item__slider-img'} src={url} alt={`slide image ${index}`} key={url + index}/>
                    )}
                </Slider>
            </div>
            {/*<img className={'shop-item__slider-img'} src={images[0]}/>*/}
        </div>
    )
}

export default Images
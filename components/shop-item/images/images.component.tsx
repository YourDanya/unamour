import React from "react";
import Slider from "../../common/slider/slider.component";

type imagesProps = {
    images: string[]
    setSliderCount: React.Dispatch<React.SetStateAction<number>>,
    slideImages: JSX.Element[],
    sliderCount: number,
}

const Images: React.FC<imagesProps> = (props) => {
    const {images, slideImages, sliderCount, setSliderCount} = props
    return (
        <div className="shop-item__images">
            <div className="shop-item__tabs">
                {images.map((url, index) =>
                    <img
                        className='shop-item__tab'
                        src={url}
                        alt={`image ${index} ${name}`}
                        key={url + index}
                        onChange={() => setSliderCount(index)}
                    />
                )}
            </div>
            <div className="shop-item__slider">
                <Slider elements={slideImages} current={sliderCount}/>
            </div>
        </div>
    )
}

export default Images
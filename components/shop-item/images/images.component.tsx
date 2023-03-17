import {FC} from 'react'
import useImages from 'components/shop-item/images/images.hook'
import Slider from 'components/common/slider/slider.component'
import {baseURL} from 'utils/api/api.utils'
import {ImagesProps} from 'components/shop-item/images/images.types'
import Image from 'next/image'

const Images: FC<ImagesProps> = (props) => {
    const {images} = props
    const {current, handleTabClick, setCurrent, elemRef, width, height} = useImages()

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
                        <Image
                            height={90}
                            width={90 * 3 / 4}
                            quality={100}
                            className='shop-item__tab-img'
                            src={`${baseURL}/images/${url}`}
                            alt={`tab image ${index}`}
                            style={{objectFit: 'cover'}}
                        />
                    </button>
                )}
            </div>
            <div className="shop-item__slider" ref={elemRef}>
                <Slider current={current} setCurrent={setCurrent}>
                    {images.map((url, index) =>
                        <Image
                            width={width}
                            height={height}
                            quality={90}
                            src={`${baseURL}/images/${url}`}
                            alt={`slide image ${index}`}
                            key={url + index}
                            style={{objectFit: 'cover'}}
                        />
                    )}
                </Slider>
            </div>
            {/*<img className={'shop-item__slider-img'} src={images[0]}/>*/}
        </div>
    )
}

export default Images
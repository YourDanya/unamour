import {FC} from 'react'
import Image from 'next/image'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import Slider from 'app/[locale]/_common/components/slider/slider.component'
import {ImagesProps} from 'app/[locale]/shop-items/[category]/[item]/_components/images/images.types'
import useImages from 'app/[locale]/shop-items/[category]/[item]/_components/images/images.hook'
import LoadImage from 'app/[locale]/_common/components/load-image-v2/load-image.component'

const Images: FC<ImagesProps> = (props) => {
    const {images} = props
    const {current, onTab, setCurrent, elemRef, width, height} = useImages()

    return (
        <div className="shop-item__images">
            <div className="shop-item__tabs">
                {images.map((url, index) =>
                    <button
                        className={`shop-item__tab ${current===index? 'shop-item__tab--current' : ''}`}
                        key={url + index}
                        data-index={index}
                        onClick={onTab}
                    >
                        <LoadImage
                            height={90}
                            width={90 * 3 / 4}
                            quality={100}
                            className='shop-item__tab-img'
                            src={`${baseURL}/images/${url}`}
                            alt={`tab image ${index}`}
                        />
                    </button>
                )}
            </div>
            <div className="shop-item__slider" ref={elemRef}>
                <Slider current={current} setCurrent={setCurrent}>
                    {images.map((url, index) => (
                        <LoadImage
                            height={height}
                            src={`${baseURL}/images/${url}`}
                            alt={`slide image ${index}`}
                            key={url + index}
                            loading={'eager'}
                            ratio={4 / 3}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Images
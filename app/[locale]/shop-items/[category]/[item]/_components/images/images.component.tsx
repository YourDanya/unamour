import {FC} from 'react'
import Image from 'next/image'
import {baseURL} from 'app/_common/utils/api/api.utils'
import {ImagesProps} from 'app/[locale]/shop-items/[category]/[item]/_components/images/images.types'
import useImages from 'app/[locale]/shop-items/[category]/[item]/_components/images/images.hook'
import LoadImage from 'app/_common/components/load-image-v2/load-image.component'
import Slider from 'app/_common/components/slider/slider.component'

const Images: FC<ImagesProps> = (props) => {
    const {images} = props
    const {current, onTab, setCurrent, height, elemRef} = useImages()

    return (
        <div className="shop-item-images images">
            <div className="images__tabs">
                {images.map(({url}, index) =>
                    <button
                        className={`images__tab ${current===index? 'images__tab--current' : ''}`}
                        key={url + index}
                        data-index={index}
                        onClick={onTab}
                    >
                        <LoadImage
                            height={90}
                            width={90 * 3 / 4}
                            quality={100}
                            className='images__tab-img'
                            src={url}
                            alt={`tab image ${index}`}
                        />
                    </button>
                )}
            </div>
            <div className="images__slider" ref={elemRef}>
                <Slider
                    current={current}
                    setCurrent={setCurrent}
                    container={true}
                    infinite={true}
                >
                    {images.map(({url}, index) => (
                        <LoadImage
                            src={url}
                            alt={`slide image ${index}`}
                            key={url + index}
                            loading={'eager'}
                            ratio={4 / 3}
                            height={height}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Images


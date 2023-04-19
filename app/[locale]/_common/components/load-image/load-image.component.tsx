'use client'

import {FC} from 'react'
import {LoadImageProps} from 'app/[locale]/_common/components/load-image/load-image.types'
import useLoadImage from 'app/[locale]/_common/components/load-image/load-image.hook'
import 'app/[locale]/_common/components/load-image/load-image.styles.sass'

const LoadImage: FC<LoadImageProps> = (props) => {

    const {src, alt, className, dataAttr} = props
    const {loaded, ref, height, handleLoaded, imgRef} = useLoadImage(props)

    return (
        <div
            className={`load-image ${loaded? 'load-image--loaded' : ''} ${className}`}
            ref={ref}
            style={{height: `${height}px`}}
        >
            <img
                ref={imgRef}
                className={`load-image__image`}
                src={src}
                alt={alt}
                onLoad={handleLoaded}
                onError={() => console.log('error')}
                data-attr={dataAttr?? ''}
            />
        </div>
    )
}

export default LoadImage
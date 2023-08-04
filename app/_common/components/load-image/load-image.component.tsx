'use client'

import {FC} from 'react'
import {LoadImageProps} from 'app/_common/components/load-image/load-image.types'
import useLoadImage from 'app/_common/components/load-image/load-image.hook'
import Image, {ImageProps} from 'next/image'

const LoadImage: FC<LoadImageProps> = (props) => {
    const {className, elemRef, height, width, ...otherProps} = props
    const {loaded, onLoaded} = useLoadImage(props)

    return (
        <div
            className={`load-image ${loaded ? 'load-image--loaded' : ''} ${className}`}
            style={{height: `${height}px`, width: `${width}px`}}
        >
            <Image
                ref={elemRef}
                className={`load-image__image`}
                width={width}
                height={height}
                {...otherProps}
                onLoadingComplete={onLoaded}
            />
        </div>
    )
}

export default LoadImage
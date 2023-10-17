'use client'

import {FC} from 'react'
import {LoadImageProps} from 'app/_common/components/load-image/load-image.types'
import useLoadImage from 'app/_common/components/load-image/load-image.hook'
import Image, {ImageProps} from 'next/image'

const LoadImage: FC<LoadImageProps> = (props) => {
    const {className, elemRef, height, width, ratio, containerStyle: _, ...otherProps} = props
    const {loaded, onLoaded, style, thumbStyle, imgRef} = useLoadImage(props)
    
    return (
        <div
            className={`load-image ${loaded ? 'load-image--loaded' : ''} ${className ?? ''}`}
            style={style}
            ref={elemRef}
        >
            {!loaded && (
                <div
                    className={'load-image__thumbnail'}
                    style={thumbStyle}
                />
            )}
            <img
                className={'load-image__image'}
                ref={imgRef}
                onLoad={onLoaded}
                style={style}
                {...otherProps}
            />
        </div>
    )
}

export default LoadImage
'use client'

import {FC} from 'react'
import {LoadImageProps} from 'app/_common/components/load-image-v2/load-image.types'
import useLoadImage from 'app/_common/components/load-image-v2/load-image.hook'
import Image, {ImageProps} from 'next/image'

const LoadImage: FC<LoadImageProps> = (props) => {
    const {className, elemRef, height, width, ratio, ...otherProps} = props
    const {loaded, onLoaded, style, imgRef} = useLoadImage(props)

    return (
        <div
            className={`load-image ${loaded ? 'load-image--loaded' : ''} ${className ?? ''}`}
            style={style}
            ref={elemRef}
        >
            {!loaded && (
                <div
                    className={'load-image__thumbnail'}
                    style={{...ratio && {paddingBottom: `${ratio * 100}%`}}}
                />
            )}
            <img
                className={'load-image__image'}
                ref={imgRef}
                onLoad={onLoaded}
                {...otherProps}
            />
        </div>
    )
}

export default LoadImage
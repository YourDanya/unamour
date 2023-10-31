'use client'

import {FC} from 'react'
import {LoadImageProps} from 'app/_common/components/load-image/load-image.types'
import useLoadImage from 'app/_common/components/load-image/load-image.hook'

const LoadImage: FC<LoadImageProps> = (props) => {
    const {className, elemRef, height, width, ratio, containerStyle: _, ...otherProps} = props
    const {loaded, style, thumbStyle, imgRef} = useLoadImage(props)

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
                style={style}
                {...otherProps}
            />
        </div>
    )
}

export default LoadImage
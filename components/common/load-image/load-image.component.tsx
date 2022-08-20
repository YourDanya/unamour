import React, {useEffect, useRef} from "react"
import useLoadImage from "./load-image.hook"

export type loadImageProps = {
    src: string,
    alt: string,
    className?: string,
    loaded?: boolean,
    dataAttr?: string,
    handleLoaded?: (event: any) => void
}

const LoadImage: React.FC<loadImageProps> = (props) => {

    const {src, alt, className, dataAttr} = props
    const {loaded, ref, height, handleLoaded, imgRef} = useLoadImage(props)

    return (
        <div
            className={`load-image ${loaded? 'load-image--loaded' : ''} 
            ${className} `} ref={ref} style={{height: `${height}px`}}
            onClick={(event) => {}}
        >
            <div className='load-image__background'/>
            <img
                ref={imgRef}
                className={`load-image__image`}
                src={src}
                alt={alt}
                onLoad={handleLoaded}
                data-attr={dataAttr?? ''}
            />
        </div>
    )
}

export default LoadImage
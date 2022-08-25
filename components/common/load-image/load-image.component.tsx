import React from "react"
import useLoadImage from "./load-image.hook"
import Spinner from "../spinner/spinner.component"

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
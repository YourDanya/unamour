import {NextPage} from 'next'
import Image from 'next/image'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {useState} from 'react'

const Test: NextPage = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [ratio, setRatio] = useState(4 / 3) // height / weight

    useLayoutEffect(() => {
        const parent = ref.current?.parentElement as HTMLElement
        const width = parent.getBoundingClientRect().width
        setWidth(width)
        const height = width * ratio
        setHeight(height)
    }, [])

    const ref = useRef<HTMLImageElement>(null)

    return (
        <div className={'test'}>
            <div className={'test__image-container'}>
                <Image
                    ref={ref}
                    src={'https://media.naked-woman.org/uploads/big_img/1136/1min.jpg'}
                    alt={''}
                    // fill
                    // style={{top: 0, left: 0}}
                    width={width}
                    height={height}
                    style={{objectFit: 'cover', objectPosition: 'center'}}
                />
                {/*<img*/}
                {/*    src={'https://media.naked-woman.org/uploads/big_img/1136/1min.jpg'}*/}
                {/*/>*/}
            </div>
        </div>
    )
}

export default Test
'use client'

import Slider from 'app/_common/components/slider-v2/slider.component'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {useState} from 'react'
import {CSSProperties} from 'react'
import Button from 'app/_common/components/button/button.component'

const contentArr = [
    {id: 0, color: 'black'},
    {id: 1, color: 'red'},
    {id: 2, color: 'blue'},
    {id: 3, color: 'green'}
]

const Test = () => {
    const [arr, setArr] = useState(contentArr.slice(0, 1))

    const onAdd = () => {
        const index = Math.min(arr.length + 1, contentArr.length)
        setArr(contentArr.slice(0, index))
    }

    const onRemove = () => {
        const index = Math.max(arr.length - 1, 0)
        setArr(contentArr.slice(0, index))
    }

    return (
        <div className={`test`}>
            <Slider infinite={true} perSlide={2}>
                {arr.map(elem => (
                    <div
                        className={'elem'}
                        style={{width: '100px', height: '300px', backgroundColor: elem.color}}
                        key={elem.id}
                    >
                        {elem.id}
                    </div>
                ))}
            </Slider>
            <Button onClick={onAdd} className={'test__button'}>
                Add
            </Button>
            <Button onClick={onRemove} className={'test__button'}>
                Remove
            </Button>
        </div>
    )
}

export default Test

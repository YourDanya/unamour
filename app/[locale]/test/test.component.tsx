'use client'

import Slider from 'app/_common/components/slider-v2/slider.component'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {useState} from 'react'
import {CSSProperties} from 'react'

const arr = [
    {id: 0, color: 'black'},
    {id: 1, color: 'red'},
    {id: 2, color: 'blue'},
    {id: 3, color: 'green'}
]

const Test = () => {

    return (
        <div className={`test`}>
            <Slider infinite={true}>
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
        </div>
    )
}

export default Test

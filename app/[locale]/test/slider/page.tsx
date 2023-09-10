'use client'

import Slider from 'app/_common/components/slider/slider.component'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {useState} from 'react'
import {CSSProperties} from 'react'
import Button from 'app/_common/components/button/button.component'
import profile from 'public/images/profile/profile-bg.jpg'
import vacancies from 'public/images/vacancies/vacancies-bg.jpg'
import contacts from 'public/images/contacts/contacts-1.jpg'
import Arrow from 'app/_common/components/arrow/arrow.component'
import ResponsiveSlider from 'app/_common/components/responsive-slider/responsive-slider.component'

const contentArr = [
    {id: 0, color: 'black', width: '100px'},
    {id: 1, color: 'red', width: '200px'},
    {id: 2, color: 'blue', width: '300px'},
    {id: 3, color: 'green', width: '400px'},
    {id: 4, color: 'yellow', width: '200px'},
    {id: 5, color: 'brown', width: '200px'}
]

const Test = () => {
    const [arr, setArr] = useState(contentArr.slice(0, 6))

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
            <div className={'test__container'}>
                <ResponsiveSlider
                    defaultProps={{container: true, perSlide: 4, slideOffset: 5, infinite: false}}
                    breakpoints={{992: {perSlide: 2}}}
                >
                    {arr.map(elem => (
                        <div
                            className={'elem'}
                            style={{backgroundColor: elem.color, height: '300px'}}
                            key={elem.id}
                        >
                            {elem.id}
                        </div>
                    ))}
                </ResponsiveSlider>
                {/*<Slider className={'test__slider'} container={true} perSlide={3} infinite={true} slideOffset={5}>*/}
                {/*    {arr.map(elem => (*/}
                {/*        <div*/}
                {/*            className={'elem'}*/}
                {/*            style={{backgroundColor: elem.color, height: '300px'}}*/}
                {/*            key={elem.id}*/}
                {/*        >*/}
                {/*            {elem.id}*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</Slider>*/}
            </div>
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


// <Slider
//     perSlide={1}
//     infinite={true}
//     slideOffset={10}
//     container={true}
// >
//     <img
//         className={'test__img'}
//         src={profile.src}
//     />
//     <img
//         className={'test__img'}
//         src={vacancies.src}
//     />
//     <img
//         className={'test__img'}
//         src={contacts.src}
//     />
// </Slider>
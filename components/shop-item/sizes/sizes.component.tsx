import React from "react"
import useSizes from 'components/shop-item/sizes/sizes.hook'

type SizesProps = {

}

const Sizes: React.FC<SizesProps> = () => {

    const {transl} = useSizes()

    return (
        <div className='sizes'>
            <div className='sizes__title'>
                {transl.title}
            </div>
            <div className='sizes__how'>
                {transl.how}
            </div>
            <ul className='list'>
                {transl.list.map(elem => (
                    <li key={elem} className={'list__item'}>
                        {elem}
                    </li>
                ))}
            </ul>
            <div className='sizes__ind'>
                {transl.ind}
            </div>
            <div className='sizes__help'>
                {transl.help}
            </div>
        </div>
    )
}

export default Sizes
import {FC} from 'react'
import useSizes from 'app/[locale]/shop-items/[category]/[id]/_components/sizes/sizes.hook'
import 'app/[locale]/shop-items/[category]/[id]/_components/sizes/sizes.styles.sass'

const Sizes: FC = () => {
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
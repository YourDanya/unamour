import {FC} from 'react'
import {PresentProps} from 'app/[locale]/shop-items/[category]/[id]/_components/present/present.types'
import PresentItem from 'app/[locale]/shop-items/[category]/[id]/_components/present/present-item/present-item.component'
import PresentForm from 'app/[locale]/shop-items/[category]/[id]/_components/present/present-form/present-form.component'
import 'app/[locale]/shop-items/[category]/[id]/_components/present/present.styles.sass'

const Present: FC<PresentProps> = (props) => {
    const {name, images, activeSize, price, color} = props

    return (
        <div className={`present`}>
            <PresentItem images={images} name={name} color={color} activeSize={activeSize} price={price}/>
            <PresentForm price={price}/>
        </div>
    )
}

export default Present
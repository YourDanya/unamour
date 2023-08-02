import {FC} from 'react'
import {PresentProps} from 'app/[locale]/shop-items/[category]/[item]/_components/present/present.types'
import PresentItem from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.component'
import PresentForm from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-form/present-form.component'

const Present: FC<PresentProps> = (props) => {
    const {transl: { name}, currentVariant: {images, price, color}, activeSize, } = props

    return (
        <div className={`present`}>
            <PresentItem
                images={images}
                name={name}
                color={color}
                activeSize={activeSize}
                price={price}
            />
            <PresentForm price={price}/>
        </div>
    )
}

export default Present
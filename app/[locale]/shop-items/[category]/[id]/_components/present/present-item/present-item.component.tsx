import Image from 'next/image'
import {baseURL} from 'app/[locale]/_common/utils/api/api.utils'
import {PresentItemProps} from 'app/[locale]/shop-items/[category]/[id]/_components/present/present-item/present-item.types'
import usePresentItem from 'app/[locale]/shop-items/[category]/[id]/_components/present/present-item/present-item.hook'
import {FC} from 'react'
import 'app/[locale]/shop-items/[category]/[id]/_components/present/present-item/present-item.styles.sass'

const PresentItem: FC<PresentItemProps> = (props) => {
    const {images, name, activeSize, price} = props
    const {transl, code, width, height, elemRef} = usePresentItem(props)

    return (
        <div className="present__item" ref={elemRef}>
            <Image
                width={width}
                height={height}
                className={'present__img'}
                src={`${baseURL}/images/${images[0]}`}
                alt={'present img'}
            />
            <div className={'present__info'}>
                <div className={'present__name'}>{name}</div>
                <div className={'present__property-block'}>
                    <div className="present__property">{transl.color}</div>
                    <div className={'present__color'} style={{backgroundColor: code}}/>
                </div>
                <div className={'present__property-block'}>
                    <div className="present__property">{transl.size}</div>
                    <div className="present__size">{activeSize}</div>
                </div>
                <div className={'present__property-block'}>
                    <div className="present__property">{transl.price}</div>
                    <div className="present__price">{price} {transl.currency}</div>
                </div>
            </div>
        </div>
    )
}

export default PresentItem
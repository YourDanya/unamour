import Image from 'next/image'
import {baseURL} from 'app/_common/utils/api/api.utils'
import {PresentItemProps} from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.types'
import usePresentItem from 'app/[locale]/shop-items/[category]/[item]/_components/present/present-item/present-item.hook'
import {FC} from 'react'
import LoadImage from 'app/_common/components/load-image-v2/load-image.component'

const PresentItem: FC<PresentItemProps> = (props) => {
    const {images, name, activeSize, price} = props
    const {transl, code} = usePresentItem(props)

    return (
        <div className="present__item">
            <LoadImage
                className={'present__img'}
                src={`${images[0].url}`}
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
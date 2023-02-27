import {FC} from 'react'
import {ItemsCollectionProps} from 'components/shop-items-collection/shop-items-collection.types'
import ShopItemPreview from 'components/shop-item-preview/shop-item-preview.component'
import {useState} from 'react'
import {useRef} from 'react'
import {useLayoutResizeObserve} from 'hooks/component/component.hooks'
import {useEffect} from 'react'
import {useLayoutEffect} from 'react'

const ShopItemsCollection: FC<ItemsCollectionProps> = ({items, title}) => {

    const [width, setWidth] = useState(0)

    useLayoutResizeObserve(() => {{
        if (itemRef.current) {
            setWidth(itemRef.current.getBoundingClientRect().width)
        }
    }})

    useLayoutEffect(() => {
        const width = itemRef.current?.getBoundingClientRect().width as number
        setWidth(width)
    }, [])

    const itemRef = useRef<HTMLDivElement>(null)

    return (
        <div className={'shop-items-collection'}>
            <div className="shop-items-collection__title">
                {title}
            </div>
            <div className={'shop-items-collection__items'}>
                {items && items.map((props, index) => (
                    <div className='shop-items-collection__item' key={props.common.slug + index}>
                        <ShopItemPreview
                            {...props}
                            width={width}
                            height={width * 4 / 3}
                            itemRef={index === 0 ? itemRef : undefined}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopItemsCollection
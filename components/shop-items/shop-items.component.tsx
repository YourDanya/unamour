import React from "react"
import Dropdown from "../common/dropdown/dropdown.component"
import Checkbox from "../common/checkbox/checkbox.component"
import useShopItems from "./shop-items.hook"
import Link from "next/link"
import PriceFilter from "../price-filter/price-filter.component"
import ScrollFixed from "../scroll-fixed/scroll-fixed.component"

export type ShopItemsProps = {
    children?: React.ReactNode
}

const ShopItems: React.FC<ShopItemsProps> = (props) => {
    const {handlePriceInputChange, price, content, children, handleSortClick} = useShopItems(props)

    return (
        <div className='shop-items'>
            <div className='shop-items__menu'>
                <ScrollFixed>
                    <div className='shop-items__menu-list'>
                        {content.list1.map(({ref, text}) => (
                            <Link href={ref} key={ref}>
                                <a className={'shop-items__menu-item'}>
                                    {text}
                                </a>
                            </Link>
                        ))}
                    </div>
                    <div className='shop-items__filters'>
                        <Dropdown name={content.filter1} className={'shop-items__sort'}>
                            {content.sort.map(({text, param}) => (
                                <button className={`shop-items__sort-item`} key={param} onClick={handleSortClick}>
                                    {text}
                                </button>
                            ))}
                        </Dropdown>
                        <Dropdown name={content.filter2}>
                            <PriceFilter
                                handleChange={handlePriceInputChange}
                                values={price}
                                contentFrom={content.price.from}
                                contentTo={content.price.to}
                            />
                        </Dropdown>
                        <Dropdown name={content.filter3}>
                            <div className='shop-items__filter shop-items__sizes'>
                                {content.sizes.map((elem) => (
                                    <Checkbox key={elem} label={elem} value={false} handleChange={() => null}/>
                                ))}
                            </div>
                        </Dropdown>
                        <Dropdown name={content.filter4}>
                            <div className='shop-items__colors'>
                                {content.colors.map(({name, code}) => (
                                    <Checkbox key={code} label={name} value={false} handleChange={() => null}/>
                                ))}
                            </div>
                        </Dropdown>
                        <div className={'shop-items__reset'}/>
                    </div>
                </ScrollFixed>
            </div>
            <div className="shop-items__page">
                {children}
            </div>
        </div>
    )
}


export const getShopItemsLayout = (page: React.ReactNode) => {
    return (
        <ShopItems>
            {page}
        </ShopItems>
    )
}

export default ShopItems
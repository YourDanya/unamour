import React from "react";

import WithIntern from "../hoc/with-intern/with-intern";
import {ShopItemsContent} from "./shop-items.content";
import {useRouter} from "next/router";
import Link from "next/link";
import {mapList} from "../../utils/utils";
import CustomDropdown from "../custom-dropdown/custom-dropdown.component";

type shopItemsProps = {}

const ShopItems: React.FC<shopItemsProps> =
    WithIntern(
        ({children, content}) => {
            const router = useRouter()
            const active = router.asPath.split('/').pop()
            return (
                <div className='shop-items'>
                    <div className='shop-items__menu'>
                        {
                            mapList(content.list1 as any[],
                                'shop-items__menu-list',
                                'shop-items__menu-item'
                            )
                        }
                        <div className='shop-items__sorting'>
                            <CustomDropdown
                                name={'СОРТИРОВКА'}
                                content={
                                    <>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                        <div>1</div>
                                    </>
                                }
                            />
                            {/*<CustomDropdown*/}
                            {/*    name={'ЦЕНА'}*/}
                            {/*    content={*/}
                            {/*        <div>2</div>*/}
                            {/*    }*/}
                            {/*/>*/}
                            {/*<CustomDropdown*/}
                            {/*    name={'РАЗМЕР'}*/}
                            {/*    content={*/}
                            {/*        <div>3</div>*/}
                            {/*    }*/}
                            {/*/>*/}
                            {/*<CustomDropdown*/}
                            {/*    name={'ЦВЕТ'}*/}
                            {/*    content={*/}
                            {/*        <div>4</div>*/}
                            {/*    }*/}
                            {/*/>*/}
                            <div className={'shop-items__sorting-reset'}>

                            </div>
                        </div>
                    </div>
                    <div className="shop-items__page">
                        {
                            children
                        }
                    </div>
                </div>
            )
        }, ShopItemsContent
    )

export const getShopItemsLayout = (page: React.ReactNode) => {
    return (
        <ShopItems>
            {page}
        </ShopItems>
    )
}

export default ShopItems
import React from "react";

import WithIntern from "../hoc/with-intern/with-intern";
import {ShopItemsContent} from "./shop-items.content";
import {useRouter} from "next/router";
import Link from "next/link";
import {mapList} from "../../utils/utils";

type shopItemsProps = {
}

const ShopItems: React.FC<shopItemsProps> =
    WithIntern(
        ({children, content}) => {
            const router = useRouter()
            const active = router.asPath.split('/').pop()
            return (
                <div className={'shop-items'}>
                    <div className={'shop-items__menu'}>
                        {
                            mapList(content.list1 as Array<string>, 'shop-items__menu-list', 'shop-items__menu-item')
                        }
                    </div>
                    <div className="shop-items__page">
                        {
                            children
                        }
                    </div>
                    {/*<Link href={'/shop-items/all'}>*/}
                    {/*    <a>all</a>*/}
                    {/*</Link>*/}
                    {/*<Link href={'/shop-items/best'}>*/}
                    {/*    <a>best</a>*/}
                    {/*</Link>*/}
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
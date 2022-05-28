import React from "react";

import {ComponentContent, NextPageWithLayout} from "../../types/types";
import WithIntern from "../hoc/with-intern/with-intern";
import {ShopItemsContent} from "./shop-items.content";
import {mapList} from "../../utils/utils";
import {useRouter} from "next/router";

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
                            content.list1
                            // mapList(content?.list1 as Array<string>, 'shop-items__menu-list', 'shop-items__menu-item', true)
                        }
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
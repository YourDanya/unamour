import React from "react";

import {ComponentContent, NextPageWithLayout} from "../../types/types";
import WithIntern from "../hoc/with-intern/with-intern";
import {ShopItemsContent} from "./shop-items.content";
import {mapArr} from "../../utils/utils";

type shopItemsProps = {

}

const ShopItems: NextPageWithLayout<shopItemsProps & ComponentContent> =
    WithIntern(
        ({children, content}) => {
            console.log(content)

            return (
                <div className={'shop-items'}>
                    <div className={'shop-items__menu'}>
                        {
                            // mapArr(content.list1, 'shop-items__menu-list', 'shop-items__menu-list-item')
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
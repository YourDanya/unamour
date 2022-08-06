import {ClientItem} from "../../../redux/shop-items/shop-items.types";
import {useSelector} from "react-redux";
import {selectClientItems} from "../../../redux/shop-items/shop-items.slice";
import {useState} from "react";

const useAdditional = () => {
    // const [currentSimilar, setCurrentSimilar] = useState()
    // const [currentViewed, setCurrentViewed] = useState()

    let items: ClientItem[] = useSelector(selectClientItems)

    const similarItems: ClientItem[] = []
    const viewedItems: ClientItem[] = []

    for (let i = 0; i < items.length; i++) {
        if (i < 10) similarItems.push(items[i])
        if (i > items.length - 10) viewedItems.push(items[i])
    }
    
    return {similarItems, viewedItems}
}

export default useAdditional

import React, {useState} from "react";
import {useRouter} from "next/router";
import {LocaleType} from "../../../types/types";
import {useSelector} from "react-redux";
import {selectClientItems} from "../../../redux/shop-items/shop-items.slice";
import {ClientItem} from "../../../redux/shop-items/shop-items.types";

const useNavSearch = () => {
    const [hidden, setHidden] = useState(true)

    const locale = useRouter().locale as LocaleType

    const items = useSelector(selectClientItems)

    const [searchItems, setSearchItems] = useState<ClientItem[]>([])

    const [input, setInput] = useState('')

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value
        if (input) {
            const searchItems = items.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
            setSearchItems(searchItems)
        } else {
            setSearchItems([])
        }
        setInput(input)
    }

    return {hidden, setHidden, locale, searchItems, setSearchItems, input, setInput,onChange}

}

export default useNavSearch
import React from 'react'
import useLayout from 'app/[locale]/shop-items/[category]/_components/_layout/layout.hook'
import {MouseAction} from 'app/[locale]/_common/types/types'
import {useState} from 'react'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {dictionary} from 'app/[locale]/shop-items/[category]/_components/_layout/sort-filter/sort-filter.content'
import {useEffect} from 'react'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'

const useSortFilter = (props: FilterProps) => {
    const {createFilter} = props

    const transl = useLocale(dictionary)
    const [sortValue, setSortValue] = useState('')

    const onClick: MouseAction = (event) => {
        const name = event.currentTarget.getAttribute('name')!
        let newSortvalue = ''
        if (sortValue !== name) {
            newSortvalue = name
        }
        setSortValue(newSortvalue)

        createFilter({value: sortValue, name: 'sort'})
    }

    return {onClick, sortValue, transl}
}

export default useSortFilter

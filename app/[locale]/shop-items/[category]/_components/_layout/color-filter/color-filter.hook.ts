import {ChangeEvent} from 'react'
import {useRef} from 'react'
import {ColorsFilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/color-filter/color-filter.types'
import {useMemo} from 'react'
import {useState} from 'react'
import {colorValues} from 'app/[locale]/_content/color/color.content'
import {useLocale} from 'app/[locale]/_common/hooks/helpers/locale/locale.hook'
import {colorDictionary} from 'app/[locale]/_content/color/color.content'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {useDebounce} from 'app/[locale]/_common/hooks/enhanced/enhanced.hooks'
import {FilterProps} from 'app/[locale]/shop-items/[category]/_components/_layout/layout.types'
import {useEffect} from 'react'
import {getKeys} from 'app/[locale]/_common/utils/main/main.utils'
import {getValues} from 'app/[locale]/_common/utils/main/main.utils'
import useCheckFilter from 'app/[locale]/shop-items/[category]/_components/_layout/check-filter/check-filter.hook'

const useColorFilter = (props: FilterProps) => {
    const {createFilter} = props

    const initArrValues = useMemo(() => {
        return colorValues.map(colorValue => colorValue.slug)
    }, [])

    const transl = useLocale(colorDictionary)

    const checkState = useCheckFilter({
        props, name: 'color', initArrValues
    })

    return {...checkState, initArrValues, transl}
}

export default useColorFilter

'use client'

import {useSearchParams} from 'next/navigation'
import {useUrlStore} from 'app/[locale]/_store/url/url.store'
import Slider from 'app/[locale]/_common/components/slider/slider-v2.component'
import 'app/[locale]/test/test.styles.sass'
import {ChangeEvent} from 'react'
import Input from 'app/[locale]/_common/components/input/input.component'
import Textarea from 'app/[locale]/_common/components/textarea/textarea.component'
import {FC} from 'react'
import Checkbox from 'app/[locale]/_common/components/checkbox/checkbox.component'
import {TranslInputs} from 'app/[locale]/_common/hooks/input/input.types'
import {object} from 'prop-types'
import {getEntries} from 'app/[locale]/_common/utils/main/main.utils'
import {createFromEntries} from 'app/[locale]/_common/utils/main/main.utils'
import Star from 'app/[locale]/shop-items/[category]/[item]/_components/reviews/star/star.component'

const Test = () => {

    return (
        <Star rating={0.5}/>
    )
}

export default Test

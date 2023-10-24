'use client'

import {useState} from 'react'
import Input from 'app/_common/components/input/input.component'
import {useRef} from 'react'
import {Model} from 'app/[locale]/test/new-model/model'
import Button from 'app/_common/components/button/button.component'

const TestNewModelPage = () => {
    const [_, setState] = useState({})
    const shouldRender = () => {
        setState({})
    }

    const ref = useRef(new Model(shouldRender))
    const {values} = ref.current

    return (
        <div className={'container test-new-model test'} ref={(elem) => ref.current.elem = elem}>
            <Input
                className={'test__input'}
                value={values.name}
                placeholder={'name'}
                onChange={(e) => ref.current.onChange(e)}
                name={'name'}
             />
            <Input
                className={'test__input'}
                value={values.email}
                placeholder={'email'}
                onChange={(e) => ref.current.onChange(e)}
                name={'email'}
            />
            <Button
                className={'test__button'}
                onClick={(e) => ref.current.onClick(e)}
            />
        </div>
    )
}

export default TestNewModelPage
import {ChangeEvent} from 'react'
import {initValues} from 'app/[locale]/test/new-model/content'
import {inputChange} from 'app/_common/utils/form/input-change/input-change.util'
import {MouseEvent} from 'react'

export class Model {
    shouldRender () {}
    constructor(shouldRender: () => void){
        this.shouldRender = shouldRender
    }

    values = {...initValues}

    elem: HTMLDivElement | null = null
    onChange (event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = inputChange<typeof initValues>(event)
        this.values[name] = value
        this.shouldRender()
    }
    onClick (event: MouseEvent) {
        console.log('elem', this.elem)
    }
}


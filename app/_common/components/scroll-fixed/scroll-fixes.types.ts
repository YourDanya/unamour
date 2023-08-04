import {Property} from "csstype"
import Position = Property.Position
import React from 'react'
import {SetStateAction} from 'react'
import {Dispatch} from 'react'

export type State = {
    position: Position,
    marginTop?: number | string,
    top?: number | string,
    bottom?: number | string,
}

export type NewStateValues = State & {toUpdate: boolean}

export type StateRef = {
    position: Position,
    toParentTop: number,
    scrollY: number,
    height: number,
    toBottom: boolean,
    first: boolean,
    self: boolean
}

export type ScrollFixedProps = {
    children: React.ReactNode,
    topOffset: number,
    bottomOffset: number,
    resize?: boolean,
    setResize?: Dispatch<SetStateAction<boolean>>
}
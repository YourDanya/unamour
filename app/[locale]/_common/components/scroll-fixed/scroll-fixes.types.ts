import {Property} from "csstype"
import Position = Property.Position
import React from 'react'

export type State = {
    position: Position,
    translateY?: number | string,
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
    parentToPageTop: number,
    self: boolean
}

export type ScrollFixedProps = {
    children: React.ReactNode,
    topOffset: number,
    bottomOffset: number
}
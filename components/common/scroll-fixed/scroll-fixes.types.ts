import {Property} from "csstype"
import Position = Property.Position

export type State = {
    position: Position,
    translateY?: number | string,
    top?: number | string,
    bottom?: number | string,
}

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
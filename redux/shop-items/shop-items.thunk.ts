import {AxiosPromise} from "axios";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {AppThunk} from "../store";
import {Api} from "../../utils/api-utils";
import {fetchItemsError, fetchItemsSuccess} from "./shop-items.slice";

export const ApiCall = (
    ApiCall: () => AxiosPromise, successDispatch: ActionCreatorWithPayload<any>, errorDispatch: ActionCreatorWithPayload<any>): AppThunk => {
    return async (dispatch) => {
        try{
            const res = await ApiCall()
            dispatch(successDispatch(res.data))
        } catch(err: any) {
            dispatch(errorDispatch(err))
        }
    }
}

export const fetchItems = (): AppThunk => {
    return async (dispatch) => {
        return dispatch(ApiCall(() => Api.get('/shop-item/all'), fetchItemsSuccess, fetchItemsError))
    }
}
import {StoreApi} from 'zustand'
import {ItemFormState} from 'app/[locale]/admin/items/_components/item-form/store/item-form.types'
import {Locale} from 'app/[locale]/_common/types/types'

export type UrlState = {
    locale: Locale,
}

export type InitUrlState = {
    locale: Locale
}

export type CreateUrlStore = (state: UrlState) => StoreApi<UrlState>

export type UseUrlStore = <T> (
    selector: (state: UrlState) => T,
    equalityFn?: (left: T, right: T) => boolean
) => T
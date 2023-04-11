import React from "react";

export type UseModal = <K extends string> (initState: Record<K, boolean>, attribute?: string) =>
    [modalState: Record<K, boolean> & Record<'modal', boolean>, showModal: (event: React.MouseEvent<HTMLElement> | string) => void, closeModal: () => void,
        showTopModal: (event: React.MouseEvent<HTMLElement>) => void, hideTopModal: (event: React.MouseEvent<HTMLElement>) => void,]

export type UseFirstRender = (callback: () => void) => void
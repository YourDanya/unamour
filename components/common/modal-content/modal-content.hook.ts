import {useEffect} from "react";
import {useRouteChange} from "../../../hooks/other.hook";

const useModalContent = (hideModal: () => void) => {
    useRouteChange(hideModal)
}

export default useModalContent
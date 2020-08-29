import {SEND_DETAILS} from "../action-types/types";

export const sendProductDetails = (info) => {
    return {
        type: SEND_DETAILS,
        info
    }
    
};
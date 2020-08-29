import * as types from '../action-types/types'

const INITIAL_STATE={
    total: 0
};

export const countReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case types.UPDATE_DB:
            
            return{
                ...state,
                total: action.payload
            };
            default:
                return state;
    }
};
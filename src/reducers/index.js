import { CHARACTERS_SUCCESS } from './../actions/index';

const initialState = {
    characters: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHARACTERS_SUCCESS: 
            return {
                ...state,
                characters: action.payload
            }
        default: 
            return state;
    }
}
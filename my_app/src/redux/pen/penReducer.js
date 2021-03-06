import {BUY_PEN} from './pentype'

const initialState = {
    numberOfPen:30
}

const penReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PEN: return {
            ...state,
            numberOfPen:state.numberOfPen-1
        }
        default: return state;
    }
}

export default penReducer;
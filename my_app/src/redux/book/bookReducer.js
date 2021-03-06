import { BUY_BOOK } from './booktype'

const initialState = {
    numberOfBooks: 50
    
}
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOK:return {
                ...state,
                numberOfBooks: state.numberOfBooks - 2
        }
        default: return state;
    }
}

export default bookReducer;
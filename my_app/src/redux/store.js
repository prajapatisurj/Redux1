import bookReducer from './book/bookReducer'
import penReducer from './pen/penReducer'
import {combineReducers ,createStore} from 'redux'

// const store = createStore(bookReducer);
// const store = createStoreStore(penReducer);
const reducers= combineReducers({
    bookReducer,
    penReducer
})
const store = createStore(reducers);
export default store;
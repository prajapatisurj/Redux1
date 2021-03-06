const {redux,createStore,combineReducers }= require('redux');
const Buy_Book = "Buy_Book"
const Buy_Pen = "Buy_Pen"
const Buy_Copy = "Buy_Copy"

const initialStateBooks = {
    numberOfBooks: 10
}
const initialStatePen = {
    numberOfPen: 20     
}
const initialStateCopy = {
    numberOfCopy: 10
}

function buyBook(){
    return {
        type: Buy_Book,
        payload:"My first Redux code"
    }
}
function buyPen(){
    return {
        type: Buy_Pen,
        payload:"My SECOND Redux code"
    }
}
function buyCopy() {
    return {
        type: Buy_Copy,
        payload:"My Thid Redux "
    }
}
const PenReducer = (state = initialStatePen, action) => {
    switch (action.type) {
        case "Buy_Pen":
            return {
            ...state,
            numberOfPen:state.numberOfPen-1
        }
        default: return state;
    }
}  
const BooksReducer = (state = initialStateBooks, action) => {
    switch (action.type) {
        case "Buy_Book"
         :return {   
            ...state,
            numberOfBooks:state.numberOfBooks-1
        }
        default: return state;
    }
}  
const CopyReducer = (state = initialStateCopy, action) => {
    switch (action.type) {
        case "Buy_Copy"
            : return {
                ...state,
                numberOfCopy:state.numberOfCopy-2
            }
            default: return state;
    }
}
const reducer= combineReducers({
    Book: BooksReducer,
    Pen: PenReducer,
    Copy:CopyReducer
})

const store = createStore(reducer);
console.log("initial State", store.getState());
const unsubscrbe=store.subscribe(() => { console.log('Updated Value', store.getState()) });
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyCopy());
store.dispatch(buyCopy());
store.dispatch(buyCopy());
unsubscrbe();

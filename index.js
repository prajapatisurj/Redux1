const {redux,createStore,combineReducers }= require('redux');
const Buy_Book = "Buy_Book"
const Buy_Pen = "Buy_Pen"

const initialStateBooks = {
    numberOfBooks: 10
}
const initialStatePen = {
    numberOfPen: 20
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
const reducer= combineReducers({
    Book: BooksReducer,
    Pen:PenReducer
})

const store = createStore(reducer);
console.log("initial State", store.getState());
const unsubscrbe=store.subscribe(() => { console.log('Updated State Value', store.getState()) });
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscrbe();

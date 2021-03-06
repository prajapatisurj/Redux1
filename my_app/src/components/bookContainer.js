import React from 'react'
import {connect} from 'react-redux'
import { buyBook } from '../redux/index'

function bookContainer(props) {
    console.log('props',props);
    return (
        <div>
            <h1>Number Of Books-{props.numberOfBooks}</h1>
            <button onClick={props.buyBook}>BuyBook</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numberOfBooks: state.bookReducer.numberOfBooks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyBook: function () {
            dispatch(buyBook());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (bookContainer)
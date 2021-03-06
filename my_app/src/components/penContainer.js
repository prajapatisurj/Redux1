import React from 'react'
import { connect } from 'react-redux'
import { buyPen } from '../redux/index'
function penContainer(props) {
    console.log('props',props)
    return (
        <div>
            <h1>Number Of Pen-{props.numberOfPen}</h1>
            <button onClick={props.buyPen}>BuyPen</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numberOfPen:state.penReducer.numberOfPen
    }
}
const mapDispatchToProps = (dispatch => {
    return {
        buyPen: function () {
            dispatch(buyPen());
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps) (penContainer)
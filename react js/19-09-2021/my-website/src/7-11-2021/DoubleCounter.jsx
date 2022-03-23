import React from "react";
import { connect } from "react-redux";


const DoubleCounter = (props) => {
    return (
        <h1>Double Counter: {props.counter * 2}</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const connectedCounter = connect(mapStateToProps);

export default connectedCounter(DoubleCounter);
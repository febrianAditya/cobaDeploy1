import { createStore, applyMiddleware } from "redux"
// import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
// import { thunk } from "redux-thunk"
import { thunk } from "redux-thunk"
import { logger } from "redux-logger"

const initialState = {
    dataUser: "Pak Fattah 2",
    age: 20,
    allDataUser: [],
    allUser: [{ id: 1, name: "John Doe" }] 
}

const reducer = (state = initialState, action) => {
    console.log(action, "===> CEK ACTION");
    
    switch (action.type) {
        case "CHANGE_NAME":
            return {...state, dataUser: action.payload}

        case "GET_ALL_DATA":
            return {...state, allDataUser: action.payload}
        default:
            return state;
    }
}

let store = createStore(reducer, applyMiddleware(thunk, logger))
export default store
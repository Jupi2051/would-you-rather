import { combineReducers } from "redux";
import usersReducer from "../Reducers/Users";
import authenticateReducer from "../Reducers/AuthedUser"
import questionsReducer from "../Reducers/Questions"

export default combineReducers({
    usersReducer,
    questionsReducer,
    authenticateReducer
})
import { combineReducers } from "redux";
import Users from "../Reducers/Users";
import authenticatedUser from "../Reducers/AuthedUser"
import Questions from "../Reducers/Questions"

export default combineReducers({
    Users,
    Questions,
    authenticatedUser
})
import { combineReducers } from "redux";
import Users from "../Reducers/Users";
import authenticatedUser from "../Reducers/AuthedUser"
import Questions from "../Reducers/Questions"
import ViewedTab from "../Reducers/SwitchTab"

export default combineReducers({
    Users,
    Questions,
    authenticatedUser,
    ViewedTab
})
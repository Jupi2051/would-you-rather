import { combineReducers } from "redux";
import Users from "../Reducers/Users";
import authenticatedUser from "../Reducers/AuthedUser";
import Questions from "../Reducers/Questions";
import ViewedTab from "../Reducers/SwitchTab";
import ViewQuestion from "../Reducers/ViewQuestion";

export default combineReducers({
    Users,
    Questions,
    authenticatedUser,
    ViewedTab,
    ViewQuestion
})
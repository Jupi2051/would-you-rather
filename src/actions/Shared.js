import { _getUsers, _getQuestions } from "../API/_DATA.js";
import { receiveQuestions } from "./Questions";
import { receiveUsers } from "./Users";

export function InitilizeData()
{
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()]).then((Values) =>
        {
            dispatch(receiveUsers(Values[0]));
            dispatch(receiveQuestions(Values[1]));
        });
    }
}
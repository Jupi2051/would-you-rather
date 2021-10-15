import { _getUsers, _getQuestions } from "../API/_DATA.js";
import { receiveQuestions } from "./Questions";
import { receiveUsers } from "./Users";
import {_saveQuestion} from "../API/_DATA";
import { addQuestion } from "./Questions";
import { AskQuestion } from "./Users"

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

export function HandleMiddleAddingQuestion(FirstChoice, SecondChoice) // Middleware Act
{
    return (dispatch, getState) =>
    {
        const { authenticatedUser } = getState()
        if (authenticatedUser !== null)
        {
            return _saveQuestion({
                author: authenticatedUser,
                optionOneText: FirstChoice,
                optionTwoText: SecondChoice,
            })
            .then((question) =>
            {
                dispatch(addQuestion(question));
                dispatch(AskQuestion(question, authenticatedUser));
            })
        }
    }
}
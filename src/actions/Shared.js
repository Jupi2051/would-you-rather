import { _getUsers, _getQuestions } from "../API/_DATA.js";
import { receiveQuestions } from "./Questions";
import { receiveUsers } from "./Users";
import { _saveQuestion, _saveQuestionAnswer } from "../API/_DATA";
import { addQuestion, addVote } from "./Questions";
import { AskQuestion, AnswerQuestion } from "./Users";
import { voteViewedQuestion } from "./ViewQuestion.js";

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

export function HandleMiddleAddingQuestion(FirstChoice, SecondChoice)
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

export function HandleAnsweringQuestion(Question, Option)
{
    return (dispatch, getState) =>
    {
        const { authenticatedUser } = getState()
        if (authenticatedUser !== null)
        {
            return _saveQuestionAnswer({
                authedUser: authenticatedUser,
                qid: Question.id,
                answer: Option,
            }).then(() => 
            {
                dispatch(addVote(Question, Option, authenticatedUser));
                dispatch(voteViewedQuestion(Question, Option, authenticatedUser));
                dispatch(AnswerQuestion(Question, Option, authenticatedUser));
            })
        }
    }
}
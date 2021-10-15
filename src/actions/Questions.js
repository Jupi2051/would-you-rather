import {_saveQuestion} from "../API/_DATA";
export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(Questions)
{
    return {
        type: RECEIVED_QUESTIONS,
        Questions
    }
}

export function addQuestion(Question)
{
    return {
        type: ADD_QUESTION,
        Question
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
            .then((question) => dispatch(addQuestion(question)))
        }
    }
}
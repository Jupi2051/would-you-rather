import { RECEIVED_QUESTIONS, ADD_QUESTION } from "../actions/Questions";

export default function Questions(state = {}, action)
{
    if (action.type === RECEIVED_QUESTIONS)
    {
        return {
            ...state,
            ...action.Questions
        }
    }
    else if (action.type === ADD_QUESTION)
    {
        return {
            ...state,
            [action.Question.id]: action.Question,
        }
    }
    else
        return state;
}
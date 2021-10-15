import { RECEIVED_QUESTIONS } from "../actions/Questions";

export default function questionsReducer(state = {}, action)
{
    if (action === RECEIVED_QUESTIONS)
    {
        return {
            ...state,
            ...action.Questions
        }
    }
    else
        return state;
}
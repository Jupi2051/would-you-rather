import { RECEIVED_QUESTIONS } from "../actions/Questions";

export default function Questions(state = {}, action)
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
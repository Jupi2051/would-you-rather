import { RECEIVED_USERS } from "../actions/Users";
import { ASK_QUESTION, ANSWER_QUESTION } from "../actions/Users";

export default function Users(state = {}, action)
{
    if (action.type === RECEIVED_USERS)
    {
        return {
            ...state,
            ...action.Users
        }
    }
    else if (action.type === ASK_QUESTION)
    {
        return {
            ...state,
            [action.userId]: 
                {
                    ...state[action.userId],
                    questions: [...state[action.userId].questions, action.question.id]
                }
        }
    }
    else if (action.type === ANSWER_QUESTION)
    {
        return {
            ...state,
            [action.User]:
            {
                ...state[action.User],
                answers: {...state[action.User].answers, [action.Question.id]: action.Option}
            }
        }
    }
    else
        return state;
}
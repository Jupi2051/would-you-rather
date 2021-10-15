import { RECEIVED_QUESTIONS, ADD_QUESTION, ADD_VOTE } from "../actions/Questions";

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
    else if (action.type === ADD_VOTE)
    {
        switch(action.Option)
        {
            case "optionOne":
            {
                return {
                    ...state,
                    [action.Question.id]: {
                        ...action.Question,
                        optionOne: {
                            text: action.Question.optionOne.text,
                            votes: [...action.Question.optionOne.votes, action.authorID]
                        },
                    },
                }
            }
            case "optionTwo":
                {
                    return {
                        ...state,
                        [action.Question.id]: {
                            ...action.Question,
                            optionTwo: {
                                text: action.Question.optionTwo.text,
                                votes: [...action.Question.optionTwo.votes, action.authorID]
                            },
                        },
                    }
                }
            default:
        }      
    }
    else
        return state;
}
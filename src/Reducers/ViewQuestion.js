import { VIEW_QUESTION, VOTE_VIEWED_QUESTION } from "../actions/ViewQuestion"

export default function ViewQuestion(state = null, action)
{
    if (action.type === VIEW_QUESTION)
    {
        return {
            ...state,
            ...action.ViewingQuestion
        }
    }
    else if (action.type === VOTE_VIEWED_QUESTION)
    {
        switch(action.Option)
        {
            case "optionOne":
            {
                return {
                        ...action.Question,
                        optionOne: {
                            text: action.Question.optionOne.text,
                            votes: [...action.Question.optionOne.votes, action.authorID]
                    },
                }
            }
            case "optionTwo":
                {
                    return {
                            ...action.Question,
                            optionTwo: {
                                text: action.Question.optionTwo.text,
                                votes: [...action.Question.optionTwo.votes, action.authorID]
                        },
                    }
                }
            default:
                return state;
        }      
    }
    else
        return state;
}
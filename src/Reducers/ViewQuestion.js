export default function ViewQuestion(state = null, action)
{
    return {
        ...state,
        ...action.ViewingQuestion
    }
}
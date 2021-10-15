export const VIEW_QUESTION = "VIEW_QUESTION";

export function viewQuestion(ViewingQuestion)
{
    return {
        type: VIEW_QUESTION,
        ViewingQuestion
    }
}

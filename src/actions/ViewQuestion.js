export const VIEW_QUESTION = "VIEW_QUESTION";
export const VOTE_VIEWED_QUESTION = "VOTE_VIEWED_QUESTION";

export function viewQuestion(ViewingQuestion)
{
    return {
        type: VIEW_QUESTION,
        ViewingQuestion
    }
}

export function voteViewedQuestion(Question, Option, authorID)
{
    return {
        type: VOTE_VIEWED_QUESTION,
        Question,
        Option,
        authorID
    }
}
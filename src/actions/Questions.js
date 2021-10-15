export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_VOTE = "ADD_VOTE";

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
        Question,
    }
}

export function addVote(Question, Option, authorID)
{
    return {
        type: ADD_VOTE,
        Question,
        Option,
        authorID
    }
}
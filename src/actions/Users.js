export const RECEIVED_USERS = "RECEIVED_USERS";
export const ASK_QUESTION = "ASK_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveUsers(Users)
{
    return {
        type: RECEIVED_USERS,
        Users
    }
}

export function AskQuestion(Question, UserID)
{
    return {
        type: ASK_QUESTION,
        userId: UserID,
        question: Question
    }
}

export function AnswerQuestion(Question, Option, User)
{
    return {
        type: ANSWER_QUESTION,
        Question,
        Option,
        User
    }
}
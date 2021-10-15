export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(Questions)
{
    return {
        type: RECEIVED_QUESTIONS,
        Questions
    }
}

export function addQuestion(Question, author)
{
    return {
        type: ADD_QUESTION,
        Question,
    }
}
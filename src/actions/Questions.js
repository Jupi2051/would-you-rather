export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS";

export function receiveQuestions(Questions)
{
    return {
        type: RECEIVED_QUESTIONS,
        Questions
    }
}
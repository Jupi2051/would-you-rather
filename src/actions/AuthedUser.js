export const AUTHENTICATE_USER = "AUTHENTICATE_USER";

export function authenticateUser(userID)
{
    return {
        type: AUTHENTICATE_USER,
        userID
    }
}
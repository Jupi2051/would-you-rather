export const RECEIVED_USERS = "RECEIVED_USERS";

export function receiveUsers(Users)
{
    return {
        type: RECEIVED_USERS,
        Users
    }
}
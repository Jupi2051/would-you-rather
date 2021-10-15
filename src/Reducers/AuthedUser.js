import { AUTHENTICATE_USER } from "../actions/AuthedUser";

export default function authenticatedUser(state = null, action)
{
    if (action.type === AUTHENTICATE_USER)
    {
        return {
            ...state,
            ...action.userID
        }
    }
    else
        return state;
}
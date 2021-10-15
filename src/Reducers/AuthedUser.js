import { AUTHENTICATE_USER } from "../actions/AuthedUser";

export default function authenticatedUser(state = null, action)
{
    if (action === AUTHENTICATE_USER)
    {
        return {
            ...state,
            ...action.userID
        }
    }
    else
        return state;
}
import { AUTHENTICATE_USER } from "../actions/AuthedUser";

export default function authenticateReducer(state = null, action)
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
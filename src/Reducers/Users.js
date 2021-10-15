import { RECEIVED_USERS } from "../actions/Users";

export default function Users(state = {}, action)
{
    if (action === RECEIVED_USERS)
    {
        return {
            ...state,
            ...action.Users
        }
    }
    else
        return state;
}
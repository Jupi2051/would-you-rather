import { SWITCH_TAB } from "../actions/SwitchTab";
import { viewingUnanswered } from "../actions/SwitchTab";

export default function ViewedTab(state = viewingUnanswered, action)
{
    if (action.type === SWITCH_TAB)
        return action.Tab;
    else
        return state;
}
export const SWITCH_TAB = "SWITCH_TAB";
export const viewingAnswered = "VIEWING_ANSWERED"
export const viewingUnanswered = "VIEWING_UNANSWERED"

export function switchTab(Tab)
{
    return {
        type: SWITCH_TAB,
        Tab
    }
}
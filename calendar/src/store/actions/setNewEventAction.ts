const setEvent = "SET_NEW_EVENT"
export const setNewEventAction = (payload: {
    mounth: number,
    day: number,
    event: string
}) => {
    return {
        type: setEvent,
        payload,
    }
}
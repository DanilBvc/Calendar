const setEvent = "SET_NEW_EVENT"
export const setNewEventAction = (payload: {
    mounth: number,
    day: number,
    event: string,
    year: number,
    fromLoacalStorage?: boolean
}) => {
    return {
        type: setEvent,
        payload,
    }
}
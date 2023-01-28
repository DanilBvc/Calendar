const getState = "DELETE_EVENT"
export const getDeleteEventAction = (payload: {
    mounth: number,
    year: number,
    day: number,
    event: string
}) => {
    return {
        type: getState,
        payload,
    }
}
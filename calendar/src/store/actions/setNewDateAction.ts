const type = "SET_NEW_DATE"
export const setNewDateAction = (payload: {
    mounth: number,
    day: number,
    year: number,
    event: string
}) => {
    return {
        type: type,
        payload,
    }
}

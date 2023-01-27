const getState = "CHANGE_EXIST_EVENT"
export const changeExistEventAction = (payload: {
    mounth: number, day: number,year: number, event: string, needToBeChanged?: string
}) => {
    return {
        type: getState,
        payload,
    }
}
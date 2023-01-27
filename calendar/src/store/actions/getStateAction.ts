const getState = "GET_STATE"
export const getStateAction = (payload: {
    mounth: number
}) => {
    return {
        type: getState,
        payload,
    }
}
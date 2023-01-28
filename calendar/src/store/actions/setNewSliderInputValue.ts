const type = "CHANGE_INPUT_SLIDER"
export const setNewSliderInputValue = (payload: {
    input: string,
    inputType: string
}) => {
    return {
        type: type,
        payload,
    }
}

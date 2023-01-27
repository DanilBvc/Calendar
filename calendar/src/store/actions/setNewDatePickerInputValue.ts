const type = "CHANGE_INPUT_DATEPICKER"
export const setNewDatePickerInputValue = (payload: {
    input: string,
    inputType: string
}) => {
    return {
        type: type,
        payload,
    }
}

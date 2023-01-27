import { formatDate, generateState } from './../utils/utils';
import { InitialInputState, Mounth } from './../types/types';
export const initialState: Mounth[][] = generateState()
export const initialInputsState: InitialInputState = {
    sliderMounth: 0,
    datePicker: formatDate(new Date()),
}
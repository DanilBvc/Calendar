export interface Mounth {
    mounth: number,
    day: number,
    dayOfTheWeek: string,
    event: string[] | []
}
export interface InitialInputState {
    sliderMounth: number,
    datePicker: string
}
export interface ICalendarCell {
    day: number,
    dayOfTheWeek: string,
    events: string[] | []
}

export interface CalendarProps {
    currentMounth: number
}
export interface HeaderProps {
    handleMounth(event: string):void,
    currentMounth: number
}
export interface IReducers {
    getStateReducer: Mounth[][],
    getInputStateReducer: InitialInputState
}
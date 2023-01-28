export interface Mounth {
    year: number,
    mounth: number,
    day: number,
    dayOfTheWeek: string,
    event: string[] | []
}
export interface InitialInputState {
    sliderMounth: number,
    datePicker: string,
    year: number
}
export interface ICalendarCell {
    day: number,
    dayOfTheWeek: string,
    events: string[] | [],
    handleChangePopup(type: string, payload: {day: number, mounth: number, events: string}) : void,
    mounth: number
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
export interface IPopup {
    handlePopup(type: string): void
}
export interface IAddPopup {
    openAddPopup: boolean,
    handlePopup(type: string) : void,
    changePopupData: {
        day: number,
        mounth: number,
        events: string
    },
    openChangePopup: boolean,
    handleChangePopup(type: string, payload: {day: number, mounth: number, events: string} | null): void
}
export interface createPopup {
    handlePopup(type: string): void
}
export interface ICalendar {
    handleChangePopup(type: string, payload: {day: number, mounth: number, events: string}) : void
}
export interface ChangePopupData {
    changePopupData: {day: number,
        mounth: number,
        events: string},
        handleChangePopup(type: string, payload: {day: number, mounth: number, events: string} | null): void
}
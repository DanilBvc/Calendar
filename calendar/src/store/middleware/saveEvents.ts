import { Dispatch, MiddlewareAPI } from 'redux';
import { Mounth } from './../../types/types';
export const saveEvents = (store: MiddlewareAPI) => (next: Dispatch) => (action: {type: string, payload: {mounth: number, year: number, event: string, day: number, fromLoacalStorage: boolean, needToBeChanged: string}}) => {
    const getDataFromLocalStorage = localStorage.getItem("events")
    if(!action.payload.fromLoacalStorage) {
        if(action.type === "SET_NEW_EVENT") {
            if(getDataFromLocalStorage !== null) {
               const arr = JSON.parse(getDataFromLocalStorage)
              arr.push(action.payload)
              localStorage.clear()
              localStorage.setItem("events", JSON.stringify(arr))
            }else {
                let arr = []
                arr.push(action.payload)
                localStorage.setItem("events", JSON.stringify(arr))
            }
        }
        if(action.type === "DELETE_EVENT") {
            if(getDataFromLocalStorage !== null) {
                const arr = JSON.parse(getDataFromLocalStorage)
               const resultArray = arr.filter((event: {mounth: number, year: number, event: string, day: number}) => {
                    if(event.mounth + 1 === action.payload.mounth && event.day === action.payload.day && event.year === action.payload.year && event.event === action.payload.event) {
                        return false
                    }else {
                        return true
                    }
                })
                localStorage.setItem("events", JSON.stringify(resultArray))
            }
        }
        if(action.type === "CHANGE_EXIST_EVENT" ) {
            if(getDataFromLocalStorage !== null) {
                const arr = JSON.parse(getDataFromLocalStorage)
                arr.forEach((event: {mounth: number, day: number, event: string[] | string, year: number}) => {
                    if(event.day === action.payload.day && event.mounth === action.payload.mounth && event.year === action.payload.year) {
                        if(event.event === action.payload.needToBeChanged) {
                            event.event =  action.payload.event
                        }
                    }
                });
                localStorage.setItem("events", JSON.stringify(arr))
            }
        }
    }
    let result = next(action)
    return result
}
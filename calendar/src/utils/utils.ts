import { dayOfTheWeek, mounthByNumber } from '../constants/constants';
import { Mounth } from './../types/types';
const howMuchDaysInMounth = (mounth: number) => {
    const currentDate = new Date(2023, mounth, 33)
    const mounthCount =  33 - currentDate.getDate();
    return mounthCount
}


export const generateState = (): Mounth[][] => {
    let res = []
    for(let i = 0; i < 12; i++) {
        const days = howMuchDaysInMounth(i) + 1
        const array = []
        for(let j = 1; j < days; j++) {
            array.push({
                mounth: i,
                day: j,
                dayOfTheWeek: dayOfTheWeek[new Date(2023, i, j).getDay()],
                event: []
            })
        }
        res.push(array)
    }
    return res
}

export const getMounthNameByNumber = (mounth: number) => {
    return mounthByNumber[mounth]
}
export const formatDate = (date: Date) => {
    let dd = date.getDate() + '';
    let mm = date.getMonth() + 1 + '';
    let yy = date.getFullYear() % 100 + '';
    if(+dd < 10) {
        dd = '0' + dd
    }
    if(+mm < 10) {
        mm = '0' + mm
    }
    if(+yy < 10) {
        yy = '0' + yy
    }
    return dd + '-' + mm + '-' + yy;
  }
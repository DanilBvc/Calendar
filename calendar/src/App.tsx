import React, {useState, useEffect} from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Popup from './components/popup/Popup';
import { useDispatch } from 'react-redux';
import { setNewEventAction } from './store/actions/setNewEventAction';
function App() {
  const [openAddPopup, setOpenAddPopup] = useState(false)
  const [openChangePopup, setOpenChangePopup] = useState(false)
  const [changePopupData, setChangePopupData] = useState({day: 1, mounth: 1, events: 'work'})
  const [loading,  setLoading] = useState(true)
  const getDataFromLocalStorage = localStorage.getItem("events")
  const dispatch = useDispatch()
  const handlePopup = (type: string) => {
    if(type === "add") {
      openAddPopup ? setOpenAddPopup(false) : setOpenAddPopup(true)
    }
  }
  const handleChangePopup = (type: string, payload: {day: number, mounth: number, events: string} | null) => {
    if(type === "change") {
      openChangePopup ? setOpenChangePopup(false) : setOpenChangePopup(true)
    }
    if(payload !== null) {
      setChangePopupData(payload)
    }
  }
  useEffect(() => {
    if(getDataFromLocalStorage !== null) {
      const eventsArray = JSON.parse(getDataFromLocalStorage)
      eventsArray.forEach((e: {mounth:number,day:number,event:string,year:number}) => {
        const mounth = e.mounth
      const day = e.day
      const year = e.year
      const event = e.event
      dispatch(setNewEventAction({mounth, day, year, event, fromLoacalStorage: true}))
      });
    }
    setLoading(false)
  }, [])
  return (
    <>
    <Header handlePopup={handlePopup}/>
    {loading ? <div>Loading please wait</div> : <Calendar handleChangePopup={handleChangePopup} />}
    <Popup openAddPopup={openAddPopup} handlePopup={handlePopup} changePopupData={changePopupData} openChangePopup={openChangePopup} handleChangePopup={handleChangePopup}/>
    </>
  );
}

export default App;

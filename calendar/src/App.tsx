import React, {useState} from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Popup from './components/popup/Popup';
function App() {
  const [openAddPopup, setOpenAddPopup] = useState(false)
  const [openChangePopup, setOpenChangePopup] = useState(false)
  const [changePopupData, setChangePopupData] = useState({day: 1, mounth: 1, events: 'work'})
  const handlePopup = (type: string) => {
    if(type === "add") {
      openAddPopup ? setOpenAddPopup(false) : setOpenAddPopup(true)
    }
  }
  const handleChangePopup = (type: string, payload: {day: number, mounth: number, events: string} | null) => {
    debugger
    if(type === "change") {
      openChangePopup ? setOpenChangePopup(false) : setOpenChangePopup(true)
    }
    if(payload !== null) {
      setChangePopupData(payload)
    }
  }
  return (
    <>
    <Header handlePopup={handlePopup}/>
    <Calendar handleChangePopup={handleChangePopup} />
    <Popup openAddPopup={openAddPopup} handlePopup={handlePopup} changePopupData={changePopupData} openChangePopup={openChangePopup} handleChangePopup={handleChangePopup}/>
    </>
  );
}

export default App;

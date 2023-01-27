import React, {useState} from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import Popup from './components/popup/Popup';
function App() {
  const [currentMounth, setCurrentMounth] = useState(0)
  const handleMounth = (event: string) => {
    if(event === "increase") {
      if(currentMounth === 11) {
        setCurrentMounth(0)
      }else {
        setCurrentMounth(currentMounth + 1)
      }
    }
   if(event === 'decrease') {
    if(currentMounth === 0) {
      setCurrentMounth(11)
    }else {
      setCurrentMounth(currentMounth - 1)
    }
   }
  }
  return (
    <>
    <Header handleMounth={handleMounth} currentMounth={currentMounth}/>
    <Calendar currentMounth={currentMounth}/>
    <Popup />
    </>
  );
}

export default App;

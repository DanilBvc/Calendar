import React from 'react'
import { CreatePopupComponent } from './createPopup/CreatePopup'
import './popup.css'
import { IAddPopup } from '../../types/types'
import ChangePopup from './changePopup/ChangePopup'
function Popup({openAddPopup, handlePopup, changePopupData, openChangePopup, handleChangePopup} : IAddPopup) {
  return (
    <div>
     {openAddPopup ?  <CreatePopupComponent handlePopup={handlePopup} /> : null}
     {openChangePopup ? <ChangePopup changePopupData={changePopupData} handleChangePopup={handleChangePopup} />: null}
    </div>
  )
}

export default Popup
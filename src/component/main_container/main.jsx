import { useContext } from 'react'
import Notes from '../Notes/Notes.jsx'
import PatientInfo from '../patient_info/patientInfoContainer'
import Appointment from '../appointment/appointment.jsx'
import Files from '../files/files.jsx'

// import {MyContext} from '../context/Mycontext'
import './main.css'

export default function Main() {
  // const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
  // console.log("just for fun ", doctorDetails)
  return (
    <div className='grid_container' >
      <div className='grid_item'>
        <PatientInfo/>
      </div >
      <div className='grid_item' style={{background:"var(--innerColor)"}}>
        <Notes/> 
        </div>
      <div className='grid_item'>
        <Appointment/>
      </div >
      <div className='grid_item'>
        <Files/>
         </div>
    </div>
  )
}
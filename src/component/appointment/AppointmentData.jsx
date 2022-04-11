import './AppointmentData.css'
import { useContext } from 'react'
import {MyContext} from '../context/Mycontext'
const FirstTab=()=>{
    const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
    if(appointmentDetails&&appointmentDetails.length>0){
        return (
            <div className='Appointment-Box-grid'>
            <div className='Appointment-date'>
                <p>{appointmentDetails[0].UpcomingAppointments.Date }</p>
                <p style={{color:'gray',fontSize:"0.4rem"}}>{appointmentDetails[0].UpcomingAppointments.Time }</p>
            </div>
            <div className='Appointment-date'>
                <p>{"Treatment"}</p>
                <p style={{color:'gray',fontSize:"0.6rem"}}>{appointmentDetails[0].UpcomingAppointments.Treatment}</p>
            </div>
            <div className='Appointment-Box__last'>
            <div>
            <p>{ "Dentist" }</p>
                <p style={{color:'gray'}}>{appointmentDetails[0].UpcomingAppointments.Dentist}</p>
                
            </div>
            <div>
            <p>{"Nurse"}</p>
                <p style={{color:'gray'}}>{appointmentDetails[0].UpcomingAppointments.Nurse}</p>
            </div>
            <div>
            <i className="fa-solid fa-note-sticky"> </i>{appointmentDetails[0].UpcomingAppointments.Doc}
            </div>
            </div>
        </div>
        )
    }
    return <p>pls wait</p>
    
}
const SecondTab=()=>{
    const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
    // console.log(appointmentDetails,">>>>")
    if(appointmentDetails&&appointmentDetails.length>0){
        return (
            <div className='Appointment-Box-grid'>
            <div className='Appointment-date'>
                <p>{appointmentDetails[0].UpcomingAppointments.Date }</p>
                <p style={{color:'gray'}}>{appointmentDetails[0].UpcomingAppointments.Time }</p>
            </div>
            <div className='Appointment-date'>
                <p>{"Treatment"}</p>
                <p style={{color:'gray'}}>{appointmentDetails[0].UpcomingAppointments.Treatment}</p>
            </div>
            <div className='Appointment-Box__last'>
            <div>
            <p>{ "Dentist" }</p>
                <p style={{color:'gray'}}>{appointmentDetails[0].UpcomingAppointments.Dentist}</p>
                
            </div>
            <div>
            <p>{"Nurse"}</p>
                <p style={{color:'gray'}}>{appointmentDetails[0].UpcomingAppointments.Nurse}</p>
            </div>
            <div>
            <i className="fa-solid fa-note-sticky"> </i>{appointmentDetails[0].UpcomingAppointments.Doc}
            </div>
            </div>
        </div>
        )
    }
    return <p>pls wait</p>
    
}
const ThirdTab=()=>{
    const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
    if (appointmentDetails&&appointmentDetails.length>0){
        return <p>{ appointmentDetails[0].MedicalRecords.status?appointmentDetails[0].MedicalRecords.status:"that" }</p>
    }
    else return <p>pls wait</p>
  
}
export {FirstTab,SecondTab,ThirdTab}
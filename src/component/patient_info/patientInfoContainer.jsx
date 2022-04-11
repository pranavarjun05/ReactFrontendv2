import { useContext } from "react";
import {MyContext} from '../context/Mycontext'
import PatientProfile from "./patientProfile";
import './patientInfo.css'
//      CSS HOOKS
export default function PatientInfo() {
  // excessing global state in order to get patientDetails
const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
  return (
    <div style={{height:"100%"}}>
        <PatientProfile patientDetails={patientDetails}/>
    </div>
  )
}

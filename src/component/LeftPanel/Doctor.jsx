import { useContext } from "react";
import { MyContext } from "../context/Mycontext";

export default function Doctor() {
    const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
  // console.log(doctorDetails,">>>>>>>>")
    return (
    <div>
          <p className='doctor__name'>{ doctorDetails.length>0?doctorDetails[0].name:"" }</p>
          <p className='doctor__designation'>{ doctorDetails.length>0?doctorDetails[0].specification:"" }</p>
    </div>
  )
}

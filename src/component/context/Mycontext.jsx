import { createContext, useState , useEffect } from "react";
// importing api url
import {
  doctorDetailUrl,
  filesUrl,
  appointmentUrl,
  pataientDetailUrl,
} from "../../api/api";

export const MyContext = createContext({});

export default function ContextProvider({ children }) {

  const [doctorDetails, setdoctorDetails] = useState([]);
  const [patientDetails, setPatientDetails] = useState([]);
  const [appointmentDetails, setAppointmentDetails] = useState([]);
  const [fileDetails, setFileDetails] = useState([]);
  // const [doctorDetails,setdoctorDetails]

  //fetching the doctor details
  const getDoctorDetail = async () => {
    const Ddata = await fetch(doctorDetailUrl, { method: "GET" });
    const D_data = await Ddata.json();
    setdoctorDetails(D_data);
  };
  
  // fetching patient details
  const getPatientDetails = async () => {
    const pdata = await fetch(pataientDetailUrl, { method: "GET" });
    const p_data = await pdata.json();
    setPatientDetails(p_data);
  };

  // fetch Appointment details
  const getAppointmentDetails = async () => {
    const adata = await fetch(appointmentUrl, { method: "GET" });
    const a_data = await adata.json();
    setAppointmentDetails(a_data);
  };

  //fetch file details
  const getFilesDetails = async () => {
    const fdata = await fetch(filesUrl);
    const f_data = await fdata.json();
    setFileDetails(f_data);
    // console.log('yha tak aa gye ')
  };


  useEffect(() => {
    // console.log("went inside")
    getDoctorDetail();
    getPatientDetails();
    getAppointmentDetails();
    getFilesDetails();
  }, [])
  
  return (

    <MyContext.Provider
      value={[doctorDetails, patientDetails, appointmentDetails, fileDetails]}
    >
      {children}
    </MyContext.Provider>
  );
}

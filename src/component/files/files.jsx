import "./files.css";
import { useContext,useEffect } from "react";
import { MyContext } from "../context/Mycontext";
export default function Files() {
  // let liElements =[]
  const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
  if (fileDetails&& fileDetails.length>0){
    return (
      <div className="File__section">
        <div className="Files__head">
          <h3>Files/Documents</h3>
          <button><i className="fas fa-file"></i> {"\n\n\n\n Add files"}</button>
        </div>
        <div className="fileList__container">
          <ul>
          <li ><i className="fa-solid fa-note-sticky"></i><a>{ fileDetails[0].files[0] }</a><i className="fa-solid fa-trash"></i></li>
          <li ><i className="fa-solid fa-note-sticky"></i><a>{ fileDetails[0].files[0] }</a><i className="fa-solid fa-trash"></i></li>
          <li ><i className="fa-solid fa-note-sticky"></i><a>{ fileDetails[0].files[0] }</a><i className="fa-solid fa-trash"></i></li>
          </ul>
        </div>
      </div>
    );
  }
  else{return (
    <div className="File__section">
      <div className="Files__head">
        <h3>Files/Documents</h3>
        <button><i className="fas fa-file"></i> {"\n\n\n\n Add files"}</button>
      </div>
      <div className="fileList__container">
        <ul>
        <li ><i className="fa-solid fa-note-sticky"></i><a>{" "} </a><i className="fa-solid fa-trash"></i></li>
        <li ><i className="fa-solid fa-note-sticky"></i><a>{" "} </a><i className="fa-solid fa-trash"></i></li>
        </ul>
      </div>
    </div>
  );

  }
}

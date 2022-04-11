import { useContext } from "react";
import { MyContext } from "../context/Mycontext";
import "./Notes.css";
export default function Notes() {
  const [doctorDetails, patientDetails, appointmentDetails, fileDetails]= useContext(MyContext)
  // console.log(doctorDetails)
  return (

    <>
      <div className="notes__head">
        <h3>Notes</h3>
        <a href="#">See all</a>
      </div>
      <div className="texarea">
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          defaultValue={
            "~ Lorem ipsum dolor sit consectetur elit.\n~ Vero! Lorem, ipsum dolor.\n~ this is"
          }
        ></textarea>
        <button>
          <i className="fa-solid fa-file-pen"></i> {"\n \nsave note"}
        </button>
      </div>
      <div className="notes__lastSection">
        <p>Lorem ipsum dolor sit amet.</p>
        <div className="notes__lastSection__">
          <div><i className="fa-solid fa-user"></i>{ doctorDetails.length>0?doctorDetails[0].name:"" }</div>
          <span>{ doctorDetails.length>0? doctorDetails[0].specification :""}</span>
        </div>
      </div>
    </>
  );
}

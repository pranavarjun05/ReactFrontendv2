import "./patientInfo.css";
import PatientImage from "../../images/patient.jpg";
export default function PatientProfile({ patientDetails }) {
  if (patientDetails && patientDetails.length > 0) {
      // console.log(patientDetails)
    return (
      // left side of patient details

      <div className="patient_info">
        <div className="patient_info_left">
          <div className="patient_image">
            <img src={PatientImage} alt="patient image" />
          </div>
          <p className="name_heading">{patientDetails[0].name}</p>
          <p className="lightText">
            {patientDetails[0].email}
          </p>
          <div className="visit_status">
            <div>
              <p> { patientDetails[0].Past } </p>
              <p className="lightText">past</p>
            </div>
            <div className="line"></div>
            <div>
              <p>{ patientDetails[0].Upcoming } </p>
              <p className="lightText">upcoming</p>
            </div>
          </div>
          <button>send Message</button>
        </div>

        {/* right side of patient details */}

        <div className="patient_info_right">
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"Gender "}
                
              </p>
              <p>{ patientDetails[0].Gender } </p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"Birthday"}
               
              </p>
              <p>{ patientDetails[0].Birthday } </p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"Phone Number "}
                
              </p>
              <p>{ patientDetails[0].PhoneNumber }  </p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"Street Adress "}
                
              </p>
              <p>{ patientDetails[0].StreetAddress }</p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"City"}
               
              </p>
              <p>{ patientDetails[0].city }</p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"Zip Code "}
                
              </p>
              <p> { patientDetails[0].ZIPCode } </p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"Member Status"}
               
              </p>
              <p>{ patientDetails[0].MemberStatus }</p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
          <div className="patient_info_rigt_item">
            <div>
              <p
                className="lightText"
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textAlign: "start",
                }}
              >
                {"Registered Date "}
                
              </p>
              <p>{ patientDetails[0].RegisterDate }</p>
            </div>
            <div style={{width:"4rem",backgroundColor:"#d8d7d7d9",height:"1px"}}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>pls wait while we are fetching</p>;
  }
}

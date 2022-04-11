import { useState } from "react";
import { FirstTab,SecondTab,ThirdTab } from "./AppointmentData";
import './Tabs.css'
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab3
    setActiveTab("tab3");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          upcoming appointment
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          past appointment
        </li>
        <li
          className={activeTab === "tab3" ? "active" : ""}
          onClick={handleTab3}
        >
          medical appointment
        </li>
      </ul>
 
      <div className="appointment__info">
        <div>
          <p>Root Canal Treatment</p>
          <button>Show Previous Treatment</button>
        </div>
        <div></div>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : (activeTab === "tab2" )?<SecondTab/>:<ThirdTab/> }
      </div>
      </div>
    </div>
  );

}
import React from 'react';
import './Selfinfo.css';
import Swal from 'sweetalert2';
import { useState } from "react";
const Selfinfo = (props) => {
const {sum}= props;

const [btime, setBtime] =useState(0);
const breakTime= {};
const getBreak =(fieldId)=>{
  const field =  document.getElementById(fieldId);
  const value = field.innerText;
  setBtime(value);
//   let breakInfo = [];
    breakTime[fieldId] = value;
//   localStorage.setItem(,[...breakTime]);
console.log(breakTime);
}
const completeMess=()=>{
// console.log("hello");
Swal.fire('Oh! Wow!! Completed your activity today!!!');
}

    return (
        <div>
            <div className="top-self-info">
                <img className="my-image" src="my-image.jpg" alt="" />
                <div className="top-info-text">
                    <h2>Abu Bakar</h2>
                    <div className='loacatin-container'>
                    <img className="location" src="location.png" alt="" />
                    <p>Chattogram,Bangladesh</p>
                    </div>
                </div>
            </div>
           <div className="info-container">
                 <div className="age-height-weight">
                    <div>
                        <h4>68<sub>kg</sub></h4>
                        <p>Weight</p>
                    </div>
                     <div>
                        <h4>5.6</h4>
                         <p>Height</p>
                    </div>
                    <div>
                        <h4>24 <sub>yrs</sub></h4>
                        <p>Age</p>
                    </div>
                 </div>
                 <div>
                    <h2>Add a Break</h2>
                    <div className="break-duration">
                        <button onClick={()=>getBreak('one')} id="one">20s</button>
                        <button onClick={()=>getBreak('two')} id="two">30s</button>
                        <button onClick={()=>getBreak('three')} id="three">40s</button>
                        <button onClick={()=>getBreak('four')} id="four">50s</button>
                        <button onClick={()=>getBreak('five')} id="five">60s</button>
                    </div>
                </div>
                <div>
                    <h3>ToDo List details</h3>
                    <div className="total-time-count">
                        <h3>Total time:  {sum} minutes</h3>
                    </div>
                    <div className="break-time">
                        <h3>Break time: {btime} </h3>
                    </div>
                </div>

                <div className="complete-activity">
                    <h2 onClick={completeMess}>Activity Completed</h2>
                </div>
           </div>
        </div>
    );
};

export default Selfinfo;
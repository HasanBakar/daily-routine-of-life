import React from 'react';
import './Selfinfo.css';
const Selfinfo = (props) => {
const {sum}= props;
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
                        <h4>20s</h4>
                        <h4>30s</h4>
                        <h4>40s</h4>
                        <h4>50s</h4>
                        <h4>60s</h4>
                    </div>
                </div>
                <div>
                    <h3>ToDo List details</h3>
                    <div className="total-time-count">
                        <h3>Total time:  {sum} minutes</h3>
                    </div>
                    <div className="break-time">
                        <h3>Break time</h3>
                    </div>
                </div>

                <div className="complete-activity">
                    <h2>Activity Completed</h2>
                </div>
           </div>
        </div>
    );
};

export default Selfinfo;
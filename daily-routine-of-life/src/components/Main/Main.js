import React from 'react';
import Todolist from "../Todolist/Todolist";
import Selfinfo from '../Selfinfo/Selfinfo';
import './Main.css'
const Main = (props) => {
    const {routine,value,addToHandle} =props;
    let sum = value;
    // console.log(value);
    return (
        <div>
            
                    <div className="main-container">
                            <div>
                               
                                    <div>
                                        <div className="top-heading">
                                            <img src="icon.png" alt="" />
                                            <h1>Daily Routine of Life.</h1>
                                        </div>
                                        <h3 className='padding-set'>Select your Todo list item</h3>
                                    </div>
                                
                                <div className="activity-container">
                                    {
                                        routine.map(todo => <Todolist
                                        key={todo.id}
                                        todo={todo}
                                        addToHandle={addToHandle}                                        
                                        ></Todolist>)
                                     }
                                </div>
                            </div>

                        <div className="activity-complete">
                               <Selfinfo sum={sum}
                               ></Selfinfo>
                        </div>
                    </div>
               
        </div>
    );
};

export default Main;

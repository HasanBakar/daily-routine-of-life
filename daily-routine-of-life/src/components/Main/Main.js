import React from 'react';
import { useState,useEffect } from "react";
import Todolist from "../Todolist/Todolist";
import './Main.css'
const Main = () => {

    const [routine, setRoutine] = useState([]);

    useEffect(()=>{

        fetch('fakedb.json')
        .then(res =>res.json())
        .then(data =>setRoutine(data))

    },[]);
    return (
        <div>
             <div className="top-heading">
                <div>
                   <h1>Daily Routine of Life.</h1>
                </div>
            </div>

            <div className="main-container">
            <div className="activity-container">
               {
                routine.map(todo => <Todolist
                key={todo.id}
                todo={todo}
                ></Todolist>)
               }
            </div>
            <div className="activity-complete">
                <h3>complete calculation</h3>
            </div>
        </div>
        </div>
    );
};

export default Main;
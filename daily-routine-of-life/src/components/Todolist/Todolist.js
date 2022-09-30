import React from 'react';
// import { addToHandle} from "../Utilies/Utilies";
import './Todolist.css';
const Todolist = (props) => {
    const {addToHandle,todo} =props;
    const {name, period, img, details} =todo;
    // console.log(name);
    // const value = getValue(()=>addToHandle(period));
   
    return (
        <div className = "todo-item">
          <div>
            <img src={img} alt="" />
            <h1>Task: {name} </h1>
            <p><span>Caption:</span> {details} </p>
            <h3>Time duration: {period} minutes. </h3>
          </div>
            <button onClick={()=>addToHandle(period)} className="btn-add">Add to list</button>
        </div>
    );
};

export default Todolist;
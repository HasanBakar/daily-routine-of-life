import React from 'react';
import './Todolist.css';

const Todolist = (props) => {
    const {name, period, img, details} =props.todo
    // console.log(name);
    return (
        <div className = "todo-item">
          <div>
            <img src={img} alt="" />
            <h1>Task Name: {name} </h1>
            <p><span>Caption:</span> {details} </p>
            <h3>Time duration: {period} minutes. </h3>
          </div>
            <button className="btn-add">Add to list</button>
        </div>
    );
};

export default Todolist;
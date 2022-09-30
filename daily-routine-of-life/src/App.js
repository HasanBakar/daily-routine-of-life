import './App.css';
import { useState,useEffect } from "react";
import Main from "./components/Main/Main";
function App() {
  const [routine, setRoutine] = useState([]);
  const [value, setValue] = useState(0);
  const addToHandle = (period) =>{
      setValue(value + period)
};


  useEffect(()=>{
      fetch('fakedb.json')
      .then(res =>res.json())
      .then(data =>setRoutine(data))

  },[]);
  // console.log(value);

  return (
    <div>
      <Main routine={routine}
      value={value}
      addToHandle={addToHandle}
      ></Main>
    </div>
  );
}

export default App;

import './App.css';
import { useState,useEffect } from "react";
import Main from "./components/Main/Main";
function App() {
  const [routine, setRoutine] = useState([]);

  useEffect(()=>{

      fetch('fakedb.json')
      .then(res =>res.json())
      .then(data =>setRoutine(data))

  },[]);
  

  return (
    <div>
      <Main routine={routine}></Main>
    </div>
  );
}

export default App;

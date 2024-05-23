import "./App.css";
import { useState, useEffect } from "react";

function App() {

  //currentEmotion is the state variable and setEmotion is the function we use to set this state variable.
  const [currentEmotion, setEmotion] = useState("Happy");

  useEffect(()=>{
    console.log("Its ${currentEmotion} right now");
  },[currentEmotion]);
  
  return (
    <div className="App">
      <h1>Current emotion is {currentEmotion}</h1>
      <button onClick={()=> setEmotion("Sad")}>Sad</button>
      <button onClick={()=> setEmotion("Excited")}>Excited</button>
      <button onClick={()=> setEmotion("Happy")}>Happy</button>
    </div>
  );
}

export default App;

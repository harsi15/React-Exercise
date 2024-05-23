import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondaryEmotion, setSecondary] = useState("tired");

  const [checkValue, setCheckValue] = ("false");

  //useEffect has 2 parameters first is the event and 2 is the dependency when it should happen.
  useEffect(()=>{
    console.log(`Its ${emotion} emotion right`);
  },[emotion])

  //If we pass just empty [] as 2nd parameter it will print only once, i.e the event will happen only once.
  useEffect(()=>{
    console.log(`Its ${secondaryEmotion} around here`);
  },[secondaryEmotion])

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("excited")}
      >
        Excited
      </button>

      <h2>Secondary Emotion is {secondaryEmotion}</h2>
      <button onClick={()=>setSecondary("grateful")}>grateful</button>
      <button onClick={()=>setSecondary("hopeful")}>hopeful</button>
      <br></br>
      <h2>Now Using checkbox to test functionality</h2>
      <input type="checkbox" value={checkValue} onChange={()=>setCheckValue((checkValue)=>!checkValue)}/>
      <label>{checkValue ? "Checked" : "Unchecked"}</label>
    </div>
  );
}

export default App;

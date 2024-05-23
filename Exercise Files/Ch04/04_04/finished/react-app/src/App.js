import "./App.css";
import { useState } from "react";

function App() {
  const [currentEmotion, setEmotion] = useState("Happy");

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

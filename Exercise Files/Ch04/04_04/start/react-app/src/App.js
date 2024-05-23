import "./App.css";
import {useState} from "react";

function App({ library }) {
  const [currentEmotion, setEmotion] = useState("Happy");
  return (
    <div className="App">
      <h1>Hello from {currentEmotion}</h1>
    </div>
  );
}

export default App;

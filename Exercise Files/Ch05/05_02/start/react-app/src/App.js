import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    alert(`The color is ${title} and the code of the color is ${color}`);
    setColor("");
    setTitle("");
  }
  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event)=>setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
      />
      <input
        value={color}
        type="color"
        onChange={(event)=>setColor(event.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default App;

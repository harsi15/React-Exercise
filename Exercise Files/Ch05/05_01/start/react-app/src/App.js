import "./App.css";
import {useRef} from "react";

function App() {
  const txtTitle = useRef();
  const txtColor = useRef();

  const submit = (e)=>{
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = txtColor.current.value;
    alert(`Color is : ${title} and the code is: ${color} `)
    txtTitle.current.value = "";
    txtColor.current.value = "";
  }

  return (
    <div className="App">
      <h1>Hello lets study useRef hook</h1>
      <form onSubmit={submit}>
        <input type ="textBox" ref={txtTitle} placeholder="Enter a color" ></input>
        <input type ="color" ref={txtColor}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

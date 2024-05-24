import "./App.css";
import {useState, useEffect} from "react";

function GithubUser({name,location}){
  
  return(
    <div>
      <h1>GitHub User is : {name}</h1>
      <p> Location is <b>{location}</b></p>
    </div>
  )
}

function App() {
  const [data, setData] = useState(null);
  useEffect(()=>fetch(`https://api.github.com/users/moonhighway`).then((response)=>response.json()).then(setData));
  if (data)
    return(
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <GithubUser name = {data.name} location = {data.location}/>
      </div>
      )
 
  return (
    <div>
      <h1>Data</h1>
    </div>
  );
}

export default App;

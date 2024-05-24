import "./App.css";
import { useState, useEffect } from "react";

const collegeList = [
  {name : "Rohan", age: 20},
  {name : "Yash", age: 25},
  {name : "Simmy", age: 23},
  {name : "Raj", age: 29}
];

function List({ data, renderItem, renderEmpty }) {
  return !data.length ? renderEmpty : <ul>{data.map((item) => (<li key = {data.name}>{renderItem(item)}</li>))}</ul>
}

function App() {
  
  return (
    <div>
      <List data = {collegeList} renderEmpty={<p>This list is empty</p>}
      renderItem={item =><>{item.name} - {item.age}</>}></List>
    </div>
  );
}

export default App;

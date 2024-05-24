import "./App.css";
import {Link} from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link to="/contact"> Contact</Link>
      <Link to="/about">About Us</Link>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact"> Contact</Link>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about"> About Us</Link>
      <h1>Contact Us</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;

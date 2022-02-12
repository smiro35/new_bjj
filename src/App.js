import logo from './logo.svg';
import './App.css';
import { Router, Link } from "@reach/router";
import Homepage from "./Components/HomePage/Homepage";
import Contact from "./Components/Contact/Contact";
import Schedule from "./Components/Schedule/Schedule"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>
        
        <Homepage path="/" />
        <Contact path="/contact" />
        <Schedule path ="/schedule"/>
      </Router>
    </div>
  );
}

export default App;




